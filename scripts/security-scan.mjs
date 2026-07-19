import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const roots = ['src', 'public'];
const textExtensions = new Set(['.js', '.jsx', '.css', '.html', '.txt', '.xml']);
const forbiddenPatterns = [
  { label: 'eval()', regex: /\beval\s*\(/ },
  { label: 'Function constructor', regex: /\bnew\s+Function\s*\(/ },
  { label: 'document.write()', regex: /document\.write\s*\(/ },
  { label: 'base64 decoder', regex: /\batob\s*\(/ },
  { label: 'user-agent cloaking', regex: /navigator\.userAgent/ },
  { label: 'automatic location replacement', regex: /location\.replace\s*\(/ },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (textExtensions.has(extname(entry.name))) files.push(path);
  }
  return files;
}

const files = ['index.html'];
for (const root of roots) files.push(...(await walk(root)));

const findings = [];
for (const file of files) {
  const content = await readFile(file, 'utf8');
  for (const pattern of forbiddenPatterns) {
    if (pattern.regex.test(content)) findings.push(`${file}: ${pattern.label}`);
  }
}

if (findings.length) {
  console.error('Security scan found patterns that require review:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`Security scan passed for ${files.length} text files.`);
