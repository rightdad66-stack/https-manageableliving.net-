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

// Fix FAQ
fixFile(path.join(__dirname, '..', 'src', 'app', 'faq', 'page.tsx'), [
  ['className="ml-faq-accordion-sec"', 'className="py-5 bg-white"'],
  ['className="ml-faq-contact-sec"', 'className="py-5 bg-light"'],
  ['className="ml-faq-contact-box"', 'className="bg-white p-5 rounded-4 shadow-sm text-center"'],
  ['className="ml-contact-content"', 'className="mb-4"']
]);

// Fix Sitemap
fixFile(path.join(__dirname, '..', 'src', 'app', 'sitemap', 'page.tsx'), [
  ['className="ml-stm-card"', 'className="col-lg-4 col-md-6 d-flex flex-column bg-white p-4 rounded-4 shadow-sm h-100"'],
  ['className="ml-stm-card-header"', 'className="d-flex align-items-center mb-4"'],
  ['className="ml-stm-card-title"', 'className="h5 fw-bold mb-0 ms-3"'],
  ['className="ml-stm-list"', 'className="list-unstyled mb-0 d-flex flex-column gap-3"'],
  ['className="ml-stm-link sub"', 'className="text-decoration-none text-secondary small d-block ms-3 hover-warning"'],
  ['className="ml-stm-link"', 'className="text-decoration-none text-dark fw-medium hover-warning"'],
  ['className="ml-stm-xml-box"', 'className="mt-5 bg-dark text-light p-5 rounded-4 shadow d-flex flex-column flex-md-row align-items-center justify-content-between"'],
  ['className="ml-xml-content"', 'className="mb-4 mb-md-0"']
]);

console.log('Rest of fixes complete!');
