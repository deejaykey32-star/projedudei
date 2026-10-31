/**
 * Kopiuje pliki aplikacji internetowej do native/www, aby wbudować je w pakiety APK/AAB/IPA.
 * Pakiety instalacyjne (apk/aab/ipa/zip) nie są kopiowane – linki do nich prowadzą na stronę.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const WWW = path.resolve(__dirname, '..', 'www');
const SITE = 'https://koronka2.pages.dev/';

const FILES = ['index.html', 'style.css', 'app.js', 'manifest.json'];

fs.rmSync(WWW, { recursive: true, force: true });
fs.mkdirSync(path.join(WWW, 'assets'), { recursive: true });

for (const f of FILES) fs.copyFileSync(path.join(ROOT, f), path.join(WWW, f));

// Kopiujemy wszystkie pliki graficzne/dźwiękowe z assets z pominięciem dużych archiwów instalacyjnych
const allAssets = fs.readdirSync(path.join(ROOT, 'assets'));
for (const a of allAssets) {
  if (!a.match(/\.(apk|aab|ipa|zip)$/i)) {
    fs.copyFileSync(path.join(ROOT, 'assets', a), path.join(WWW, 'assets', a));
  }
}

// Linki „Pobierz …” w ustawieniach kierujemy na stronę (pakietów nie ma wewnątrz aplikacji)
const indexPath = path.join(WWW, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8')
  .replace(/href="assets\/(koronka[^"]*\.(?:apk|aab|ipa|zip))"/g, `href="${SITE}assets/$1"`);
fs.writeFileSync(indexPath, html);

console.log(`Skopiowano pliki aplikacji do ${WWW}`);
