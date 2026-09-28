/**
 * check-page-breaks.js -- where do the generated PDFs break across pages, and is it ugly?
 *
 * The @media print rules in css/style.css decide where Chrome may split a page,
 * and the only way to know they worked is to look at the PDFs. This reads every
 * file in files/autoresumes/ back through pdftotext, prints the lines on either
 * side of every page break, and fails on the breaks that make a printed resume
 * look broken:
 *
 *   - a job header (title, "Company | Location", "Month YYYY to Month YYYY")
 *     stranded at the bottom of a page, or split across two
 *   - a school entry (name, area, "YYYY - YYYY") split across two pages
 *   - a paragraph or bullet split mid-sentence
 *   - a section heading stranded at the bottom of a page
 *   - a last page that holds nothing but the "Online version:" footer
 *
 * `npm run resumes` runs this after generating, and the pre-commit hook runs it
 * on staged PDFs. Exit status: 0 clean, 1 bad breaks, 2 could not check.
 *
 * Usage:
 *   node check-page-breaks.js                 # every PDF in files/autoresumes/
 *   node check-page-breaks.js qa-lead cs      # only these profiles
 *   node check-page-breaks.js --quiet         # only the breaks that fail
 *   node check-page-breaks.js --dir <folder>  # another folder of PDFs
 *   node check-page-breaks.js --staged        # the PDFs as staged in git, for the
 *                                             # hook; warns instead of failing when
 *                                             # pdftotext is unavailable
 *
 * Needs pdftotext (poppler). Git for Windows ships it in mingw64/bin, which is on
 * PATH in Git Bash and normally in Windows too; PDFTOTEXT=<path> overrides the lookup.
 */
const { execFileSync, spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const SCRIPT_DIR = __dirname;
const OUT_DIR_REL = 'files/autoresumes';
const OUT_DIR = path.join(SCRIPT_DIR, 'files', 'autoresumes');
const NAME = 'EscobedoJohn';
const CONTEXT = 3; // lines printed on each side of a page break

// Where pdftotext lives when it is not on PATH.
const KNOWN_PDFTOTEXT = [
  'C:/Program Files/Git/mingw64/bin/pdftotext.exe',
  'C:/msys64/mingw64/bin/pdftotext.exe',
  '/opt/homebrew/bin/pdftotext',
  '/usr/local/bin/pdftotext',
  '/usr/bin/pdftotext',
];

const MISSING_TOOL = [
  'pdftotext was not found, so the page breaks could not be checked.',
  'It is part of poppler: Git for Windows ships it in mingw64/bin under its install',
  'folder, macOS gets it from "brew install poppler", Debian and Ubuntu from',
  '"apt install poppler-utils". Set PDFTOTEXT=<path> if it lives somewhere unusual.',
];

const USAGE = [
  'usage: node check-page-breaks.js [profile ...] [--quiet] [--dir <folder>] [--staged]',
  '',
  '  profile      only EscobedoJohn_<profile>.pdf, e.g. qa-lead',
  '  --quiet, -q  print only the page breaks that fail',
  '  --dir        check the PDFs in another folder',
  '  --staged     check the PDFs as staged in git (used by the pre-commit hook)',
];

/** True when this program name or path can actually be started. */
function runs(exe) {
  return !spawnSync(exe, ['-v'], { stdio: 'ignore' }).error;
}

function findPdftotext() {
  if (process.env.PDFTOTEXT) return runs(process.env.PDFTOTEXT) ? process.env.PDFTOTEXT : null;
  if (runs('pdftotext')) return 'pdftotext';
  return KNOWN_PDFTOTEXT.find((exe) => fs.existsSync(exe) && runs(exe)) || null;
}

/**
 * The PDF as one array of non-empty lines per page. Trailing whitespace goes,
 * leading whitespace stays: in -layout output, indentation is how a bullet
 * (or a school line) tells itself apart from a heading or a job header.
 */
function pageLines(exe, pdfPath) {
  const text = execFileSync(exe, ['-enc', 'UTF-8', '-layout', pdfPath, '-'], {
    maxBuffer: 64 * 1024 * 1024,
  }).toString('utf8');
  const pages = text.split('\f');
  if (pages.length > 1 && !pages[pages.length - 1].trim()) pages.pop();
  return pages.map((page) =>
    page.split(/\r?\n/).map((line) => line.replace(/\s+$/, '')).filter((line) => line.trim())
  );
}

// What the rendered lines look like, from js/main.js and the print CSS.
const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
const JOB_DATE = new RegExp('^(?:' + MONTHS + ') [0-9]{4} to (?:(?:' + MONTHS + ') [0-9]{4}|Present)$');
const SCHOOL_DATE = /^\s*(?=.*[0-9])(?:[0-9]{4})?\s*[\u2013\u2014-]\s*(?:[0-9]{4})?$/; // "2015 – 2017"
const HEADING = /^[A-Z][A-Z ]+$/; // h2 text; its letter-spacing makes pdftotext print "E D U C AT I O N"
const HEADINGS = {
  SKILLS: 'Skills',
  PROFESSIONALEXPERIENCE: 'Professional Experience',
  ADDITIONALEXPERIENCE: 'Additional Experience',
  EDUCATION: 'Education',
};
const FOOTER = /^\s*Online version:/;
const INDENTED = /^\s+\S/;
const SENTENCE_END = /[.!?:;)"'\u201d\u2019]$/;
const LOWERCASE_START = /^[a-z]/;

function headingName(line) {
  return HEADING.test(line) ? HEADINGS[line.replace(/ /g, '')] : undefined;
}

/**
 * Every bad break in one PDF, as { boundary, kind, detail }. boundary is the page
 * break the failure belongs to: 0 sits between page 1 and page 2.
 */
function findBadBreaks(pages) {
  const bad = [];
  const covered = new Set(); // boundaries a failure already explains
  const add = (boundary, kind, detail) => {
    bad.push({ boundary, kind, detail });
    covered.add(boundary);
  };
  const lastPage = pages.length - 1;
  const quote = (line) => (line ? `"${line.text.trim()}"` : '?');

  // Every line with its page, plus the section each page ends in: only inside
  // Professional Experience is an indented line without a full stop a cut bullet.
  // Skills lists and school lines print indented too, and never end in one.
  const flat = [];
  const sectionAtEnd = [];
  let section = 'Contact';
  pages.forEach((lines, p) => {
    lines.forEach((text, i) => {
      section = headingName(text.trim()) || section;
      flat.push({ p, text, first: i === 0, last: i === lines.length - 1 });
    });
    sectionAtEnd[p] = section;
  });

  flat.forEach((line, k) => {
    const trimmed = line.text.trim();
    const above = flat[k - 1];
    const twoAbove = flat[k - 2];

    // A job header is the two lines above a "Month YYYY to Month YYYY" line.
    if (JOB_DATE.test(trimmed)) {
      if (twoAbove && twoAbove.p !== line.p) {
        add(twoAbove.p, 'job header split', `page ${twoAbove.p + 1} ends with the title ${quote(twoAbove)} and page ${line.p + 1} opens with the rest of its header`);
      } else if (above && above.p !== line.p) {
        add(above.p, 'job header split', `page ${line.p + 1} opens with the date line ${quote(line)} cut off from ${quote(twoAbove)}`);
      } else if (line.last && line.p < lastPage) {
        add(line.p, 'job header stranded', `page ${line.p + 1} ends on the header for ${quote(twoAbove)} with none of the job under it`);
      }
    }

    // A school entry is name, area, "YYYY - YYYY".
    if (SCHOOL_DATE.test(line.text)) {
      if (line.first && line.p > 0) {
        add(line.p - 1, 'school entry split', `page ${line.p + 1} opens with the lone date line ${quote(line)}`);
      } else if (above && above.first && above.p > 0) {
        add(above.p - 1, 'school entry split', `page ${above.p + 1} opens with ${quote(above)} cut off from ${quote(twoAbove)}`);
      }
    }

    // A section heading with nothing under it.
    const heading = headingName(trimmed);
    if (heading && line.last && line.p < lastPage) {
      add(line.p, 'section heading stranded', `page ${line.p + 1} ends on the ${heading} heading`);
    }
  });

  // Text split mid-sentence across a break nothing above explains.
  for (let b = 0; b < lastPage; b++) {
    if (covered.has(b)) continue;
    const tail = pages[b][pages[b].length - 1];
    const head = pages[b + 1][0];
    if (!tail || !head) continue;
    if (LOWERCASE_START.test(head.trim())) {
      add(b, 'paragraph split', `page ${b + 2} opens mid-sentence with "${head.trim()}"`);
    } else if (sectionAtEnd[b] === 'Professional Experience' && INDENTED.test(tail) && !SENTENCE_END.test(tail)) {
      add(b, 'bullet split', `page ${b + 1} ends mid-bullet with "${tail.trim()}"`);
    }
  }

  // The footer with a page to itself.
  const last = pages[lastPage];
  if (lastPage > 0 && last.length === 1 && FOOTER.test(last[0])) {
    add(lastPage - 1, 'footer alone', `page ${lastPage + 1} holds nothing but the footer line`);
  }

  return bad;
}

/** The page edges of one PDF, with its failures under the breaks they belong to. */
function formatReport(name, pages, bad, { quiet }) {
  if (quiet && bad.length === 0) return '';
  const out = [`${name}  (${pages.length} page${pages.length === 1 ? '' : 's'})`];
  const show = (p, line) => `      ${String(p + 1).padStart(2)} | ${line}`;
  for (let b = 0; b < pages.length - 1; b++) {
    const failures = bad.filter((f) => f.boundary === b);
    if (quiet && failures.length === 0) continue;
    out.push(`  page ${b + 1} -> ${b + 2}`);
    pages[b].slice(-CONTEXT).forEach((line) => out.push(show(b, line)));
    out.push('         ----');
    pages[b + 1].slice(0, CONTEXT).forEach((line) => out.push(show(b + 1, line)));
    failures.forEach((f) => out.push(`  \u2717 ${f.kind}: ${f.detail}`));
  }
  if (!quiet) {
    out.push(pages.length === 1 ? '  one page, nothing to break' : `  last page: ${pages[pages.length - 1].length} lines`);
    if (bad.length === 0) out.push('  \u2713 clean');
  }
  return out.join('\n');
}

/**
 * Check these PDFs and print the report. Returns { checked, failed, bad } with bad
 * the number of bad breaks, or { missingTool: true } when pdftotext is unavailable
 * (the explanation has already gone to stderr).
 */
function checkFiles(files, { quiet = false } = {}) {
  const exe = findPdftotext();
  if (!exe) {
    console.error(MISSING_TOOL.join('\n'));
    return { missingTool: true, checked: 0, failed: 0, bad: 0 };
  }
  let failed = 0;
  let bad = 0;
  const reports = [];
  for (const file of files) {
    const pages = pageLines(exe, file);
    const found = findBadBreaks(pages);
    if (found.length) {
      failed += 1;
      bad += found.length;
    }
    const report = formatReport(path.basename(file), pages, found, { quiet });
    if (report) reports.push(report);
  }
  if (reports.length) console.log(reports.join('\n\n') + '\n');
  const count = `${files.length} file${files.length === 1 ? '' : 's'}`;
  console.log(bad === 0
    ? `Page breaks: ${count} checked, none broken.`
    : `Page breaks: ${bad} bad break${bad === 1 ? '' : 's'} in ${failed} of ${count}.`);
  return { missingTool: false, checked: files.length, failed, bad };
}

function parseArgs(argv) {
  const args = { quiet: false, staged: false, dir: null, help: false, filters: [] };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--quiet' || arg === '-q') args.quiet = true;
    else if (arg === '--staged') args.staged = true;
    else if (arg === '--dir') args.dir = argv[++i];
    else if (arg.startsWith('--dir=')) args.dir = arg.slice('--dir='.length);
    else if (arg === '--help' || arg === '-h') args.help = true;
    else args.filters.push(arg);
  }
  return args;
}

/** PDFs in a folder, optionally only the profiles named on the command line. */
function selectFiles(dir, filters) {
  const wanted = filters.map((f) => f.toLowerCase());
  const prefix = `${NAME.toLowerCase()}_`;
  return fs.readdirSync(dir)
    .filter((file) => file.toLowerCase().endsWith('.pdf'))
    .filter((file) => {
      if (!wanted.length) return true;
      const base = file.toLowerCase();
      const key = base.slice(0, -'.pdf'.length).replace(prefix, '');
      return wanted.includes(base) || wanted.includes(key);
    })
    .sort()
    .map((file) => path.join(dir, file));
}

/**
 * The staged PDFs, copied out of the index into a temp folder: what is about to be
 * committed can differ from the working copy, and that is what the hook must judge.
 */
function stagedFiles() {
  const git = (args) => execFileSync('git', args, { cwd: SCRIPT_DIR, maxBuffer: 256 * 1024 * 1024 });
  const staged = git(['diff', '--cached', '--name-only', '--diff-filter=ACM', '--', `${OUT_DIR_REL}/`])
    .toString('utf8').split('\n').filter((p) => p.toLowerCase().endsWith('.pdf'));
  if (!staged.length) return { tmp: null, files: [] };
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'page-breaks-'));
  const files = staged.map((p) => {
    const copy = path.join(tmp, path.basename(p));
    fs.writeFileSync(copy, git(['show', `:${p}`]));
    return copy;
  });
  return { tmp, files };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(USAGE.join('\n'));
    return 0;
  }

  let files;
  let tmp = null;
  if (args.staged) {
    ({ tmp, files } = stagedFiles());
    if (!files.length) return 0; // nothing staged, nothing to judge
  } else {
    const dir = args.dir ? path.resolve(args.dir) : OUT_DIR;
    if (!fs.existsSync(dir)) {
      console.error(`No such folder: ${dir}`);
      return 2;
    }
    files = selectFiles(dir, args.filters);
    if (!files.length) {
      console.error(args.filters.length
        ? `No PDF in ${dir} matches: ${args.filters.join(', ')}`
        : `No PDFs in ${dir}. Run npm run resumes first.`);
      return 2;
    }
  }

  try {
    const result = checkFiles(files, { quiet: args.quiet });
    if (result.missingTool) {
      if (!args.staged) return 2;
      console.error('pre-commit: skipping the page-break check.');
      return 0;
    }
    if (result.bad && args.quiet) console.log('Run npm run breaks to see every page edge.');
    return result.bad ? 1 : 0;
  } finally {
    if (tmp) fs.rmSync(tmp, { recursive: true, force: true });
  }
}

if (require.main === module) process.exitCode = main();

module.exports = { checkFiles, findBadBreaks, findPdftotext, pageLines };
