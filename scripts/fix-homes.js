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

  // Fix Our Homes pages
  content = content.replace(/className="ml-home-grid"/g, 'className="row g-5"');
  content = content.replace(/className="ml-home-card"/g, 'className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-0 bg-white mb-4 overflow-hidden"');
  content = content.replace(/className="ml-home-img-wrap"/g, 'className="position-relative" style={{ height: "300px" }}"');
  content = content.replace(/className="ml-home-badge"/g, 'className="position-absolute top-0 start-0 m-3 bg-warning text-dark px-3 py-1 rounded-pill fw-bold small shadow-sm z-index-1"');
  content = content.replace(/className="ml-home-content"/g, 'className="p-4 p-md-5 d-flex flex-column flex-grow-1"');
  content = content.replace(/className="ml-home-city"/g, 'className="text-uppercase text-secondary small fw-bold mb-2 d-block" style={{ letterSpacing: "0.05em" }}"');
  content = content.replace(/className="ml-home-title"/g, 'className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}"');
  content = content.replace(/className="ml-home-address"/g, 'className="d-flex align-items-center text-secondary mb-4"');
  content = content.replace(/className="ml-home-checklist"/g, 'className="list-unstyled mb-4"');
  content = content.replace(/className="ml-home-check-item"/g, 'className="d-flex align-items-start mb-2 text-secondary"');
  
  // Specific map stuff
  content = content.replace(/className="ml-homes-map-sec"/g, 'className="py-5 bg-light mt-5"');
  content = content.replace(/className="ml-map-header"/g, 'className="text-center mb-5"');
  content = content.replace(/className="ml-map-addresses"/g, 'className="row g-4 justify-content-center mb-5"');
  content = content.replace(/className="ml-map-addr-card"/g, 'className="col-lg-2 col-md-4 col-sm-6 text-center"');
  content = content.replace(/className="ml-map-addr-title"/g, 'className="fw-bold mb-2"');
  content = content.replace(/className="ml-map-addr-text"/g, 'className="text-secondary small"');
  content = content.replace(/className="ml-map-iframe-wrap"/g, 'className="rounded-4 overflow-hidden shadow-sm" style={{ height: "450px" }}"');

  // Fix buttons
  content = content.replace(/className="ml-btn-home-primary"/g, 'className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning"');
  content = content.replace(/className="ml-btn-home-secondary"/g, 'className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Converted: ${file.replace(srcAppDir, '')}`);
  }
});

console.log('Homes conversion complete!');
