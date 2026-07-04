const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '..', 'src', 'app');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('page.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const pageFiles = findFiles(srcAppDir);

pageFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Because of the bad sed command, `style={{ height: "300px" "` exists.
  // We want to replace `style={{(.*?)}}"` with `style={{$1}}`
  // We want to replace `style={{(.*?)}} "` with `style={{$1}} "`
  // Also fix `style={{ letterSpacing: "0.05em" ">` which came from `style={{ letterSpacing: "0.05em" ">`?
  // Let's just fix the specific ones we know we broke:
  
  content = content.replace(/style=\{\{ height: "300px" "/g, 'style={{ height: "300px" }}');
  content = content.replace(/style=\{\{ letterSpacing: "0.05em" "/g, 'style={{ letterSpacing: "0.05em" }}');
  content = content.replace(/style=\{\{ fontFamily: "var\(--font-heading\)" "/g, 'style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/style=\{\{ height: "450px" "/g, 'style={{ height: "450px" }}');

  // And any left over `}}"` just in case
  content = content.replace(/\}\}"/g, '}}');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed syntax in: ${file.replace(srcAppDir, '')}`);
  }
});

console.log('Syntax fix complete!');
