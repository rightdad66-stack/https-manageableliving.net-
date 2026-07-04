const fs = require('fs');
const path = require('path');

function fixFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  for (const [find, replace] of replacements) {
    content = content.replace(new RegExp(find, 'g'), replace);
  }
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${path.basename(filePath)}`);
  }
}

// Fix CrisisBar
fixFile(path.join(__dirname, '..', 'src', 'components', 'CrisisBar.tsx'), [
  ['className="ml-crisis-alert-bar"', 'className="bg-danger text-light text-center py-2 small fw-bold"'],
  ['className="ml-container-fluid"', 'className="container-fluid"'],
  ['className="ml-top-header-bar"', 'className="bg-dark text-light border-bottom border-secondary"'],
  ['className="ml-top-left d-flex gap-3"', 'className="d-flex gap-3 small text-secondary"'],
  ['className="ml-top-right"', 'className="small text-secondary"']
]);

// Fix StatsSplit
fixFile(path.join(__dirname, '..', 'src', 'components', 'Home', 'StatsSplit.tsx'), [
  ['className="ml-stats-section"', 'className="py-5 bg-white"'],
  ['className="ml-stats-ml-container"', 'className="container py-lg-4"'],
  ['className="ml-stats-grid"', 'className="row g-5 align-items-center"'],
  ['className="ml-stats-visual-col"', 'className="col-lg-6"'],
  ['className="ml-image-slider-wrapper"', 'className="position-relative"'],
  ['className="ml-slider-ml-container"', 'className="rounded-4 overflow-hidden shadow-lg position-relative"'],
  ['className="ml-floating-card"', 'className="position-relative w-100 h-100"'],
  ['className="ml-stats-text-col"', 'className="col-lg-6"'],
  ['className="ml-stats-title"', 'className="display-5 fw-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}'],
  ['className="ml-stats-desc"', 'className="lead text-secondary mb-5"'],
  ['className="ml-stat-bars-ml-container"', 'className="d-flex flex-column gap-3 mb-5"'],
  ['className="ml-stat-bar-wrapper"', 'className="bg-light rounded-pill p-1 shadow-sm"'],
  ['className="ml-stat-bar-fill ml-stat-1"', 'className="bg-dark text-warning rounded-pill py-3 px-4 fw-bold" style={{ width: "90%" }}'],
  ['className="ml-stat-bar-fill ml-stat-2"', 'className="bg-warning text-dark rounded-pill py-3 px-4 fw-bold" style={{ width: "95%" }}'],
  ['className="ml-btn-solid"', 'className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm"']
]);

console.log('Component fixes complete!');
