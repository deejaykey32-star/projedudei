const fs = require('fs');
const path = require('path');

const links = new Set();

function scan(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      const matches = code.matchAll(/href=(?:["'`]([^"'`]+)["'`]|\{`([^`]+)`\})/g);
      for (const m of matches) {
        const link = m[1] || m[2];
        if (link && link.startsWith('/')) {
          links.add({ file: path.relative('.', full), link });
        }
      }
    }
  }
}

scan('components');
scan('app');

console.log('Znalezione linki wewnętrzne:');
for (const item of links) {
  console.log(`${item.file}: ${item.link}`);
}

