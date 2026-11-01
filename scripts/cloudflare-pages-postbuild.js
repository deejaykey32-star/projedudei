const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('Katalog out nie istnieje, pomijam postbuild.');
  process.exit(0);
}

let generatedCount = 0;

function processDir(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      const indexHtml = path.join(fullPath, 'index.html');
      const targetHtml = `${fullPath}.html`;

      // Jeśli w podkatalogu jest index.html, stwórz plik .html obok podkatalogu
      if (fs.existsSync(indexHtml) && !fs.existsSync(targetHtml)) {
        fs.copyFileSync(indexHtml, targetHtml);
        generatedCount++;
      }

      // Rekurencja
      processDir(fullPath);
    }
  }
}

processDir(outDir);

// Przydatne aliasy bezpośrednie
const aliases = [
  { from: 'exam/index.html', to: 'egzamin.html' },
  { from: 'simulator/index.html', to: 'symulator.html' },
  { from: 'pobierz/index.html', to: 'downloads.html' },
  { from: 'lekcje/index.html', to: 'lessons.html' },
];

for (const { from, to } of aliases) {
  const src = path.join(outDir, from);
  const dst = path.join(outDir, to);
  if (fs.existsSync(src) && !fs.existsSync(dst)) {
    fs.copyFileSync(src, dst);
    generatedCount++;
  }
}

// Upewnij się, że 404.html istnieje w out/
const notFoundSrc = path.join(outDir, '_not-found', 'index.html');
const notFoundDst = path.join(outDir, '404.html');
if (fs.existsSync(notFoundSrc)) {
  fs.copyFileSync(notFoundSrc, notFoundDst);
}

// Upewnij się, że _redirects istnieje w out/
const redirectsSrc = path.resolve(__dirname, '..', 'public', '_redirects');
const redirectsDst = path.resolve(outDir, '_redirects');
if (fs.existsSync(redirectsSrc)) {
  fs.copyFileSync(redirectsSrc, redirectsDst);
}

console.log(`Pomyślnie utworzono ${generatedCount} plików .html w out dla Cloudflare Pages, eliminując ryzyko 404!`);
