/**
 * pre-commit check: is files/autoresumes/ still the resume it claims to be?
 *
 * The Download PDF / Download Word buttons on index.html serve those files, so a
 * commit that changes the resume without re-running `npm run resumes` quietly
 * hands recruiters an out-of-date resume. This blocks that.
 *
 * The check is content-based, not "did you stage something": generate-resumes.js
 * records a sha256 of every input it rendered from in files/autoresumes/generated.json,
 * and this compares those hashes against the *staged* content of the same files.
 * Staging a stale files/autoresumes/ therefore does not get you past it.
 *
 * Only runs when the commit actually touches the render path. Bypass with
 * `git commit --no-verify`.
 */
const { execFileSync } = require('child_process');
const crypto = require('crypto');

const OUT_DIR = 'files/autoresumes';
const STAMP = `${OUT_DIR}/generated.json`;

function git(args) {
	// Capture stderr rather than inheriting it; a missing path is an expected
	// answer here, not something to spill git's own "fatal:" line over.
	return execFileSync('git', args, {
		maxBuffer: 256 * 1024 * 1024,
		stdio: ['ignore', 'pipe', 'pipe'],
	});
}

function gitLines(args) {
	return git(args).toString('utf8').split('\n').filter(Boolean);
}

/** Content of a path as it currently sits in the index, or null if it is not there. */
function stagedContent(filePath) {
	try {
		return git(['show', `:${filePath}`]);
	} catch {
		return null;
	}
}

/**
 * Hash text the same way generate-resumes.js does: CRLF normalized away, since
 * git stores blobs with LF while a Windows working copy holds CRLF, and a line
 * ending never changes the rendered resume.
 */
function hashText(buffer) {
	return crypto.createHash('sha256')
		.update(buffer.toString('utf8').replace(/\r\n/g, '\n'))
		.digest('hex');
}

function fail(lines) {
	console.error(`\n${lines.join('\n')}\n`);
	process.exit(1);
}

// Hooks run from the repo root, but do not rely on it.
process.chdir(git(['rev-parse', '--show-toplevel']).toString('utf8').trim());

const stampBlob = stagedContent(STAMP);
if (!stampBlob) {
	// Nothing to compare against. Say so rather than blocking every commit.
	console.error(`pre-commit: ${STAMP} is missing, so the generated resumes cannot be verified.`);
	console.error('            Run `npm run resumes` to create it.');
	process.exit(0);
}

let stamp;
try {
	stamp = JSON.parse(stampBlob.toString('utf8'));
} catch {
	fail([
		`pre-commit: ${STAMP} is not valid JSON.`,
		'Run `npm run resumes` to rewrite it.',
	]);
}

const inputs = Object.keys(stamp.inputs || {});
const staged = gitLines(['diff', '--cached', '--name-only', '--diff-filter=ACMR']);
const touchesResume = staged.some(
	(file) => inputs.includes(file) || file === STAMP || file.startsWith(`${OUT_DIR}/`)
);

// A commit that cannot have changed the resume is none of this hook's business.
if (!touchesResume) process.exit(0);

const stale = [];
for (const [file, expected] of Object.entries(stamp.inputs)) {
	const content = stagedContent(file);
	if (content === null) {
		stale.push(`${file} (not in the index)`);
	} else if (hashText(content) !== expected) {
		stale.push(file);
	}
}

// Catches a generated.json staged without the files it describes.
const tracked = new Set(gitLines(['ls-files', OUT_DIR]));
const missing = (stamp.outputs || []).filter((file) => !tracked.has(`${OUT_DIR}/${file}`));

if (stale.length === 0 && missing.length === 0) process.exit(0);

const message = [
	'The generated resumes are out of date.',
	'',
	`The download buttons on index.html serve ${OUT_DIR}/, so committing this would`,
	'hand recruiters a resume that does not match the site.',
];

if (stale.length) {
	message.push('', 'Changed since the last full generate:');
	message.push(...stale.map((file) => `  - ${file}`));
}
if (missing.length) {
	message.push('', 'Described by generated.json but not committed:');
	message.push(...missing.map((file) => `  - ${OUT_DIR}/${file}`));
}

message.push(
	'',
	'Fix it with:',
	`  npm run resumes && git add ${OUT_DIR}`,
	'',
	'Or, if you are certain the output is unaffected:',
	'  git commit --no-verify'
);

fail(message);
