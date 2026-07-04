const fs = require('fs');
const path = require('path');

const replacements = {
  '/2003 Idaho Avenue Pictures /': '/idaho-drive-pictures/',
  '/315 vantage Pictures/': '/vantage-pictures/',
  '/1010 Delasandri Ln Pictures/': '/delasandri-pictures/',
  '/1011 Sue Drive Pictures/': '/sue-drive-pictures/',
  '/cottage1010  Pictures/': '/cottage-pictures/'
};

function walkSync(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let filepath = path.join(dir, file);
    let stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkSync(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

walkSync('src', (filepath) => {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.js') || filepath.endsWith('.jsx')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;
    for (const [oldPath, newPath] of Object.entries(replacements)) {
      if (content.includes(oldPath)) {
        content = content.split(oldPath).join(newPath);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
