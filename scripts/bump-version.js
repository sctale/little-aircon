import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const pkgPath = resolve('package.json');
const buildNumPath = resolve('.build_number');
const readmePath = resolve('README.md');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

let buildNum = 1;
if (existsSync(buildNumPath)) {
  buildNum = parseInt(readFileSync(buildNumPath, 'utf-8').trim(), 10) + 1;
}

writeFileSync(buildNumPath, String(buildNum));

// 格式: 3.0.1, 3.0.2, ...
const newVersion = `3.0.${buildNum}`;

pkg.version = newVersion;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// 同步更新 README.md 中的版本标题
let readme = readFileSync(readmePath, 'utf-8');
readme = readme.replace(/^### v\d+\.\d+\.\d+$/m, `### v${newVersion}`);
writeFileSync(readmePath, readme);

console.log(`🔖 version → ${newVersion}`);
