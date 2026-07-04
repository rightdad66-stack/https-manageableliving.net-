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
  if (file === path.join(srcAppDir, 'page.tsx')) return;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Generic patterns
  content = content.replace(/className="ml-[a-z]+-page-wrapper"/g, 'className="bg-light min-vh-100 pb-5"');
  
  content = content.replace(/className="ml-[a-z]+-hero"/g, 'className="bg-dark text-light py-5 position-relative overflow-hidden"');
  content = content.replace(/className="ml-[a-z]+-ml-container"/g, 'className="container py-lg-4"');
  content = content.replace(/className="ml-[a-z]+-breadcrumb"/g, 'className="text-warning text-uppercase small fw-bold mb-3 d-block" style={{ letterSpacing: "0.05em" }}');
  content = content.replace(/className="ml-[a-z]+-hero-h1"/g, 'className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-[a-z]+-hero-sub"/g, 'className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}');

  // Specific grids and columns
  content = content.replace(/className="ml-[a-z]+-main-sec"/g, 'className="py-5 bg-light"');
  content = content.replace(/className="ml-[a-z]+-grid"/g, 'className="row g-5"');
  content = content.replace(/className="ml-[a-z]+-info-col"/g, 'className="col-lg-4"');
  
  // Specific blocks
  content = content.replace(/className="ml-[a-z]+-info-card"/g, 'className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white d-flex flex-row align-items-start gap-3"');
  content = content.replace(/className="ml-[a-z]+-icon"/g, 'className="text-warning flex-shrink-0 mt-1" style={{ width: "24px", height: "24px" }}');
  content = content.replace(/className="ml-[a-z]+-details"/g, 'className="flex-grow-1 text-secondary"');
  
  content = content.replace(/className="ml-[a-z]+-map-box"/g, 'className="card border-0 shadow-sm rounded-4 p-4 mt-4 bg-white"');
  content = content.replace(/className="ml-[a-z]+-map-iframe"/g, 'className="w-100 rounded-3 border-0 mt-3" style={{ height: "300px" }}');

  // Generic inner blocks
  content = content.replace(/className="ml-inner-hero"/g, 'className="bg-dark text-light py-5 position-relative overflow-hidden"');
  content = content.replace(/className="ml-inner-hero-container"/g, 'className="container py-lg-4 position-relative z-index-1"');
  content = content.replace(/className="ml-inner-hero-title"/g, 'className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-inner-hero-subtitle"/g, 'className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}');

  content = content.replace(/className="ml-inner-content"/g, 'className="py-5 bg-white"');
  content = content.replace(/className="ml-inner-content-container"/g, 'className="container py-lg-4"');
  content = content.replace(/className="ml-content-grid"/g, 'className="row g-5"');
  content = content.replace(/className="ml-content-main"/g, 'className="col-lg-8"');
  content = content.replace(/className="ml-content-sidebar"/g, 'className="col-lg-4"');
  
  content = content.replace(/className="ml-content-card"/g, 'className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-white"');
  content = content.replace(/className="ml-content-card-alt"/g, 'className="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-5 bg-light"');

  content = content.replace(/className="ml-section-title"/g, 'className="h2 fw-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-subsection-title"/g, 'className="h4 fw-bold mb-3 mt-4" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-text-lead"/g, 'className="lead text-secondary mb-4"');
  content = content.replace(/className="ml-text-body"/g, 'className="text-secondary lh-lg mb-4"');

  // Calls to action blocks
  content = content.replace(/className="ml-[a-z]+-cta"/g, 'className="bg-charcoal text-light py-5 text-center mt-5"');
  content = content.replace(/className="ml-cta-title"/g, 'className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}');
  content = content.replace(/className="ml-cta-desc"/g, 'className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}');
  content = content.replace(/className="ml-cta-btn-group"/g, 'className="d-flex flex-column flex-sm-row justify-content-center gap-3"');
  content = content.replace(/className="ml-btn-gold"/g, 'className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm"');
  content = content.replace(/className="ml-btn-white"/g, 'className="btn btn-light rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm hover-warning"');
  content = content.replace(/className="ml-btn-dark"/g, 'className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Converted: ${file.replace(srcAppDir, '')}`);
  }
});

console.log('Conversion complete!');
