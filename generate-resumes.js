/**
 * generate-resumes.js — one command, per-profile ATS resume files.
 *
 * Renders index.html?profile=<key> for every profile defined in
 * resume-config.js and writes files/autoresumes/EscobedoJohn_<profile>.pdf.
 * Everything in files/autoresumes/ is machine-generated and safe to overwrite;
 * manual exports live directly in files/.
 *
 * PDF only. Word output was dropped because html-to-docx laid the resume out
 * too badly to be worth sending; files/ still holds manual .docx exports.
 *
 * Reuses the existing puppeteer dependency. The profile list is read live from
 * RESUME_CONFIG in the page so this never drifts from config.
 *
 * Usage:
 *   node generate-resumes.js                       # all profiles
 *   node generate-resumes.js qa-ai business-analyst # only these
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SCRIPT_DIR = __dirname;
const INDEX = path.join(SCRIPT_DIR, 'index.html');
const OUT_DIR = path.join(SCRIPT_DIR, 'files', 'autoresumes');
const NAME = 'EscobedoJohn';
const STAMP = path.join(OUT_DIR, 'generated.json');

// Every file whose content changes what the generated resumes look like. A full
// run records their hashes in generated.json so the pre-commit hook can tell
// whether files/autoresumes/ is still current -- the download buttons on
// index.html serve those files, so stale output reaches recruiters directly.
// Add to this list whenever the render path grows a new dependency.
const INPUT_FILES = [
  'index.html',
  'css/style.css',
  'js/resumeJSON.js',
  'js/resume-config.js',
  'js/resume-utils.js',
  'js/main.js',
  'generate-resumes.js',
];

// Normalize CRLF first: git stores these blobs with LF while the working copy may
// hold CRLF, and a line ending never changes the rendered resume. The pre-commit
// hook hashes the same way -- keep the two in step.
function hashInput(relativePath) {
  const content = fs.readFileSync(path.join(SCRIPT_DIR, relativePath), 'utf8');
  return crypto.createHash('sha256').update(content.replace(/\r\n/g, '\n')).digest('hex');
}

// The look is owned entirely by the resume's @media print CSS -- this script just
// reproduces a default browser "Save as PDF" (Letter paper, no header/footer,
// background graphics off) and takes the page margin straight from the stylesheet's
// @page rule, so changing the CSS changes the PDF exactly like a manual Ctrl+P would.
const CSS_PATH = path.join(SCRIPT_DIR, 'css', 'style.css');
function readPrintPageMargin() {
  try {
    const css = fs.readFileSync(CSS_PATH, 'utf8');
    const m = css.match(/@page\s*\{[^}]*?margin:\s*([^;}]+)/i);
    if (m) return m[1].trim();
  } catch { /* fall through to browser default */ }
  return null;
}

// Optional CLI filter: node generate-resumes.js qa-ai instructor
const only = process.argv.slice(2).map(s => s.toLowerCase());

function fileUrl(p, query = '') {
  return `file:///${p.replace(/\\/g, '/')}${query}`;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const pageMargin = readPrintPageMargin();
  console.log(`Page margin: ${pageMargin ? `${pageMargin} (from @page CSS)` : '(browser default)'}`);

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();

    // Load once to read the profile list straight from resume-config.js.
    await page.goto(fileUrl(INDEX), { waitUntil: 'networkidle0' });
    let profiles = await page.evaluate(() => Object.keys(RESUME_CONFIG.profiles));
    if (only.length) profiles = profiles.filter(p => only.includes(p.toLowerCase()));

    if (profiles.length === 0) {
      console.error(`No matching profiles. Available: known keys in resume-config.js`);
      process.exit(1);
    }
    console.log(`Generating ${profiles.length} profile(s): ${profiles.join(', ')}\n`);

    for (const profile of profiles) {
      await page.goto(fileUrl(INDEX, `?profile=${encodeURIComponent(profile)}`), { waitUntil: 'networkidle0' });
      // Wait for the dynamic render to actually populate the resume.
      await page.waitForFunction(
        () => {
          const t = document.querySelector('.resume-title');
          return t && t.textContent && t.textContent.trim().length > 0;
        },
        { timeout: 15000 }
      );

      // PDF — same engine and @media print styles as a manual Ctrl+P -> Save as PDF.
      const pdfPath = path.join(OUT_DIR, `${NAME}_${profile}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'Letter',            // headless defaults to A4; force Letter to match a US browser print
        printBackground: false,      // matches Chrome's default "Background graphics: off"
        displayHeaderFooter: false,  // no header/footer, matches a clean Ctrl+P
        // Margin comes from the stylesheet's @page rule, not this script.
        ...(pageMargin ? { margin: { top: pageMargin, right: pageMargin, bottom: pageMargin, left: pageMargin } } : {}),
      });

      const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0);
      console.log(`  ✓ ${profile.padEnd(16)} PDF ${kb(pdfPath)}KB`);
    }

    // Only a full run can honestly claim the whole folder is current, so a
    // filtered run leaves the old stamp in place and the hook keeps complaining.
    if (only.length) {
      console.log('\nPartial run: generated.json left untouched. Run with no arguments before committing.');
    } else {
      fs.writeFileSync(STAMP, JSON.stringify({
        generated: new Date().toISOString(),
        inputs: Object.fromEntries(INPUT_FILES.map(f => [f, hashInput(f)])),
        outputs: profiles.map(p => `${NAME}_${p}.pdf`),
      }, null, 2) + '\n');
    }
  } finally {
    await browser.close();
  }
  console.log(`\nDone. Files written to ${OUT_DIR}`);
}

main().catch((err) => { console.error('Error:', err.message); process.exit(1); });
