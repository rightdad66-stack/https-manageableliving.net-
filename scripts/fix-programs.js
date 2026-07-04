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

  // Fix Programs Overview (programs/page.tsx)
  content = content.replace(/className="ml-prog-intro-sec"/g, 'className="py-5 bg-white"');
  content = content.replace(/className="ml-prog-intro-text"/g, 'className="lead text-center text-secondary mx-auto mb-0" style={{ maxWidth: "800px" }}');
  content = content.replace(/className="ml-prog-grid-sec"/g, 'className="py-5 bg-light"');
  content = content.replace(/className="ml-prog-card"/g, 'className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4"');
  content = content.replace(/className="ml-prog-icon-wrap"/g, 'className="d-inline-flex align-items-center justify-content-center bg-warning text-dark rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }}');
  content = content.replace(/className="ml-prog-card-title"/g, 'className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-prog-card-intro"/g, 'className="text-secondary lh-lg mb-4 flex-grow-1"');
  content = content.replace(/className="ml-prog-list-title"/g, 'className="fw-bold text-uppercase small text-dark mb-3" style={{ letterSpacing: "0.05em" }}');
  content = content.replace(/className="ml-prog-checklist"/g, 'className="list-unstyled mb-4"');
  content = content.replace(/className="ml-prog-check-item"/g, 'className="d-flex align-items-start mb-2 text-secondary"');
  content = content.replace(/className="ml-check-mark"/g, 'className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }}');
  content = content.replace(/className="ml-prog-actions"/g, 'className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top"');
  content = content.replace(/className="ml-btn-prog-primary"/g, 'className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning"');
  content = content.replace(/className="ml-btn-prog-secondary"/g, 'className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase"');

  // Fix Men's / Women's / Subpages
  // ml-mens-*, ml-womens-*, ml-aftercare-*, etc
  // We'll use regex to match the prefixes: `ml-[a-z]+-`
  
  // Specific sections for subpages
  content = content.replace(/className="ml-[a-z]+-intro"/g, 'className="py-5 bg-white"');
  content = content.replace(/className="ml-[a-z]+-intro-grid"/g, 'className="row g-5 align-items-center"');
  content = content.replace(/className="ml-[a-z]+-intro-content"/g, 'className="col-lg-6"');
  content = content.replace(/className="ml-[a-z]+-intro-img"/g, 'className="col-lg-6"');
  content = content.replace(/<img src="([^"]+)"\s+alt="([^"]+)"\s+width="([^"]+)"\s+height="([^"]+)"\s+loading="lazy"\s+decoding="async" \/>/g, '<img src="$1" alt="$2" className="img-fluid rounded-4 shadow" width="$3" height="$4" loading="lazy" decoding="async" />');
  content = content.replace(/className="ml-[a-z]+-included"/g, 'className="py-5 bg-light"');
  content = content.replace(/className="ml-[a-z]+-sec-header"/g, 'className="text-center mb-5"');
  content = content.replace(/className="ml-[a-z]+-grid-3"/g, 'className="row g-4"');
  content = content.replace(/className="ml-[a-z]+-inc-card"/g, 'className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm h-100"');
  content = content.replace(/className="ml-[a-z]+-inc-icon"/g, 'className="text-warning mb-3" style={{ width: "48px", height: "48px" }}');
  content = content.replace(/className="ml-[a-z]+-inc-text"/g, 'className="text-secondary fw-medium"');

  content = content.replace(/className="ml-[a-z]+-process"/g, 'className="py-5 bg-white"');
  content = content.replace(/className="ml-[a-z]+-proc-grid"/g, 'className="row g-4"');
  content = content.replace(/className="ml-[a-z]+-step-card"/g, 'className="col-lg-3 col-md-6 text-center position-relative"');
  content = content.replace(/className="ml-[a-z]+-step-num"/g, 'className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-[a-z]+-step-title"/g, 'className="h5 fw-bold mb-2"');
  content = content.replace(/className="ml-[a-z]+-step-desc"/g, 'className="text-secondary small"');

  // Fix blue buttons
  content = content.replace(/className="ml-btn-blue"/g, 'className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm"');
  content = content.replace(/className="ml-[a-z]+-actions"/g, 'className="d-flex flex-wrap gap-3 mt-4"');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Converted: ${file.replace(srcAppDir, '')}`);
  }
});

console.log('Programs conversion complete!');
