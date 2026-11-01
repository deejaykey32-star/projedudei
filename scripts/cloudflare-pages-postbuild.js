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

      // Kopiuj index.html -> folder.html
      if (fs.existsSync(indexHtml) && !fs.existsSync(targetHtml)) {
        fs.copyFileSync(indexHtml, targetHtml);
        generatedCount++;
      }

      // Kopiuj index.txt -> folder.txt (dla Next.js RSC payload)
      const indexTxt = path.join(fullPath, 'index.txt');
      const targetTxt = `${fullPath}.txt`;
      if (fs.existsSync(indexTxt) && !fs.existsSync(targetTxt)) {
        fs.copyFileSync(indexTxt, targetTxt);
        generatedCount++;
      }

      // Rekurencja
      processDir(fullPath);
    }
  }
}

processDir(outDir);

// Przydatne aliasy bezpośrednie (zarówno .html jak i .txt)
const aliases = [
  { from: 'lekcje/index.html', to: '10-lekcji.html' },
  { from: 'lekcje/index.txt', to: '10-lekcji.txt' },
  { from: 'lekcje/index.html', to: '10-lekcji-krok-po-kroku.html' },
  { from: 'lekcje/index.txt', to: '10-lekcji-krok-po-kroku.txt' },
  { from: 'lekcje/index.html', to: 'lekcje-krok-po-kroku.html' },
  { from: 'lekcje/index.txt', to: 'lekcje-krok-po-kroku.txt' },
  { from: 'lekcje/index.html', to: 'akademia.html' },
  { from: 'lekcje/index.txt', to: 'akademia.txt' },
  { from: 'lekcje/index.html', to: 'lessons.html' },
  { from: 'lekcje/index.txt', to: 'lessons.txt' },
  { from: 'exam/index.html', to: 'egzamin.html' },
  { from: 'exam/index.txt', to: 'egzamin.txt' },
  { from: 'simulator/index.html', to: 'symulator.html' },
  { from: 'simulator/index.txt', to: 'symulator.txt' },
  { from: 'pobierz/index.html', to: 'downloads.html' },
  { from: 'pobierz/index.txt', to: 'downloads.txt' },
];

for (const { from, to } of aliases) {
  const src = path.join(outDir, from);
  const dst = path.join(outDir, to);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    generatedCount++;
  }
}

// Tworzenie aliasów katalogowych z index.html i index.txt (np. /10-lekcji/, /akademia/)
const dirAliases = [
  '10-lekcji',
  '10-lekcji-krok-po-kroku',
  'lekcje-krok-po-kroku',
  'akademia',
  'lessons',
  'symulator',
  'egzamin',
  'downloads'
];

const sourceMap = {
  '10-lekcji': 'lekcje',
  '10-lekcji-krok-po-kroku': 'lekcje',
  'lekcje-krok-po-kroku': 'lekcje',
  'akademia': 'lekcje',
  'lessons': 'lekcje',
  'symulator': 'simulator',
  'egzamin': 'exam',
  'downloads': 'pobierz'
};

for (const alias of dirAliases) {
  const targetDir = path.join(outDir, alias);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const sourceDir = path.join(outDir, sourceMap[alias]);
  const srcHtml = path.join(sourceDir, 'index.html');
  const srcTxt = path.join(sourceDir, 'index.txt');
  if (fs.existsSync(srcHtml)) {
    fs.copyFileSync(srcHtml, path.join(targetDir, 'index.html'));
    generatedCount++;
  }
  if (fs.existsSync(srcTxt)) {
    fs.copyFileSync(srcTxt, path.join(targetDir, 'index.txt'));
    generatedCount++;
  }
}

// Kopiowanie downloads z public do out
const publicDownloads = path.resolve(__dirname, '..', 'public', 'downloads');
const outDownloads = path.resolve(outDir, 'downloads');
if (fs.existsSync(publicDownloads)) {
  if (!fs.existsSync(outDownloads)) {
    fs.mkdirSync(outDownloads, { recursive: true });
  }
  const files = fs.readdirSync(publicDownloads);
  for (const file of files) {
    fs.copyFileSync(path.join(publicDownloads, file), path.join(outDownloads, file));
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

console.log(`Pomyślnie utworzono/zaktualizowano ${generatedCount} plików .html/.txt w out dla Cloudflare Pages, eliminując ryzyko 404!`);
