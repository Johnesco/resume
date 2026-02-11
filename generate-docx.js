const puppeteer = require('puppeteer');
const HTMLtoDOCX = require('html-to-docx');
const fs = require('fs');
const path = require('path');

async function generateDocx() {
    const scriptDir = __dirname;
    const inputPath = path.join(scriptDir, 'index.html');
    const outputPath = path.join(scriptDir, 'files', 'EscobedoJohnResume.docx');

    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Load the HTML file
    const fileUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
    console.log(`Loading ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Get the rendered HTML content
    const htmlContent = await page.evaluate(() => {
        // Get just the resume content, not the whole page
        const resume = document.querySelector('.resume') || document.body;
        return resume.innerHTML;
    });

    // Get computed styles for better formatting
    const styles = await page.evaluate(() => {
        const styleEl = document.querySelector('style');
        return styleEl ? styleEl.innerHTML : '';
    });

    await browser.close();
    console.log('Browser closed.');

    // Wrap content with basic styling for Word
    const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.4; }
                h1 { font-size: 18pt; margin-bottom: 5pt; }
                h2 { font-size: 14pt; margin-top: 12pt; margin-bottom: 6pt; border-bottom: 1px solid #333; }
                h3 { font-size: 12pt; margin-top: 10pt; margin-bottom: 4pt; }
                ul { margin: 6pt 0; padding-left: 20pt; }
                li { margin-bottom: 3pt; }
                p { margin: 6pt 0; }
                .contact-info { margin-bottom: 10pt; }
                .job-header { margin-bottom: 4pt; }
                .date { color: #666; }
            </style>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
    `;

    console.log('Converting to DOCX...');
    const docxBuffer = await HTMLtoDOCX(fullHtml, null, {
        table: { row: { cantSplit: true } },
        footer: false,
        pageNumber: false,
    });

    fs.writeFileSync(outputPath, docxBuffer);
    console.log(`\nSuccess! DOCX saved to:\n${outputPath}`);
}

generateDocx().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
