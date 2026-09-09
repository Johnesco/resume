/**
 * generate-resumes.js — one command, per-profile ATS resume files.
 *
 * Renders index.html?profile=<key> for every profile defined in
 * resume-config.js and writes files/autoresumes/EscobedoJohn_<profile>.pdf
 * and .docx. Everything in files/autoresumes/ is machine-generated and safe to
 * overwrite; manual exports live directly in files/.
 *
 * Reuses the existing puppeteer + html-to-docx dependencies. The profile list
 * is read live from RESUME_CONFIG in the page so this never drifts from config.
 *
 * Usage:
 *   node generate-resumes.js                       # all profiles
 *   node generate-resumes.js qa-ai business-analyst # only these
 */
const puppeteer = require('puppeteer');
const HTMLtoDOCX = require('html-to-docx');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const INDEX = path.join(SCRIPT_DIR, 'index.html');
const OUT_DIR = path.join(SCRIPT_DIR, 'files', 'autoresumes');
const NAME = 'EscobedoJohn';

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

// Basic Word-friendly styling for the DOCX (matches generate-docx.js).
const DOCX_STYLE = `
  body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.4; }
  h1 { font-size: 18pt; margin-bottom: 5pt; }
  h2 { font-size: 14pt; margin-top: 12pt; margin-bottom: 6pt; border-bottom: 1px solid #333; }
  h3 { font-size: 12pt; margin-top: 10pt; margin-bottom: 4pt; }
  ul { margin: 6pt 0; padding-left: 20pt; }
  li { margin-bottom: 3pt; }
  p { margin: 6pt 0; }
  .date { color: #666; }
`;

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

      // DOCX — extract the resume container (not <body>, which pulls in chrome).
      const html = await page.evaluate(() => {
        const el = document.querySelector('.resume-container') || document.body;
        return el.innerHTML;
      });
      const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${DOCX_STYLE}</style></head><body>${html}</body></html>`;
      const docxBuffer = await HTMLtoDOCX(fullHtml, null, {
        table: { row: { cantSplit: true } },
        footer: false,
        pageNumber: false,
      });
      const docxPath = path.join(OUT_DIR, `${NAME}_${profile}.docx`);
      fs.writeFileSync(docxPath, docxBuffer);

      const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0);
      console.log(`  ✓ ${profile.padEnd(16)} PDF ${kb(pdfPath)}KB  DOCX ${kb(docxPath)}KB`);
    }
  } finally {
    await browser.close();
  }
  console.log(`\nDone. Files written to ${OUT_DIR}`);
}

main().catch((err) => { console.error('Error:', err.message); process.exit(1); });
