const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'app', 'about-us', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/className="ml-about-philosophy"/g, 'className="py-5 bg-white"');
content = content.replace(/className="ml-about-opening"/g, 'className="lead text-center mb-5 fw-medium"');
content = content.replace(/className="ml-philosophy-content"/g, 'className="col-lg-6"');
content = content.replace(/className="ml-philosophy-img-wrap"/g, 'className="col-lg-6"');

content = content.replace(/className="ml-about-provide"/g, 'className="py-5 bg-light"');
content = content.replace(/className="ml-section-header"/g, 'className="text-center mb-5"');
content = content.replace(/className="ml-provide-card"/g, 'className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm h-100"');
content = content.replace(/className="ml-provide-text"/g, 'className="text-secondary fw-medium"');

content = content.replace(/className="ml-about-values"/g, 'className="py-5 bg-white"');
content = content.replace(/className="ml-value-card"/g, 'className="col-lg-3 col-md-6 d-flex flex-column align-items-center text-center bg-light p-4 rounded-4 shadow-sm h-100"');
content = content.replace(/className="ml-value-title"/g, 'className="h5 fw-bold mb-3"');
content = content.replace(/className="ml-value-desc"/g, 'className="text-secondary small mb-0"');

content = content.replace(/className="ml-about-why"/g, 'className="py-5 bg-light"');
content = content.replace(/className="ml-why-card"/g, 'className="col-lg-4 col-md-6 text-center position-relative"');
content = content.replace(/className="ml-why-card" style=\{\{ gridColumn: "1 \/ -1", maxWidth: "400px", margin: "0 auto" \}\}/g, 'className="col-lg-4 col-md-6 text-center position-relative mx-auto"');

content = content.replace(/className="ml-why-bullet"/g, 'className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }}');
content = content.replace(/className="ml-why-text"/g, 'className="text-secondary fw-medium"');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed about-us/page.tsx');
