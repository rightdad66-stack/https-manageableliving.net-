const fs = require('fs');
const path = require('path');

function fixFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) { console.log(`SKIP (not found): ${filePath}`); return; }
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  for (const [find, replace] of replacements) {
    if (typeof find === 'string') {
      content = content.split(find).join(replace);
    } else {
      content = content.replace(find, replace);
    }
  }
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.relative(process.cwd(), filePath)}`);
  } else {
    console.log(`No changes: ${path.relative(process.cwd(), filePath)}`);
  }
}

const src = path.join(__dirname, '..');

// ============================================================
// our-homes/page.tsx  – 3 remaining ml- classes
// ============================================================
fixFile(path.join(src, 'src/app/our-homes/page.tsx'), [
  ['className="ml-homes-intro-sec"',  'className="py-5 bg-white"'],
  ['className="ml-homes-intro-text"', 'className="lead text-center text-secondary mx-auto mb-0" style={{ maxWidth: "750px" }}'],
  ['className="ml-homes-grid-sec"',   'className="py-5 bg-light"'],
  ['className="ml-homes-list"',       'className="row g-5"'],
]);

// ============================================================
// Per-home pages – shared patterns
// ============================================================
const homePaths = [
  path.join(src, 'src/app/our-homes/idaho-drive/page.tsx'),
  path.join(src, 'src/app/our-homes/vantage-pointe/page.tsx'),
  path.join(src, 'src/app/our-homes/delasandri/page.tsx'),
  path.join(src, 'src/app/our-homes/cottage-delasandri/page.tsx'),
  path.join(src, 'src/app/our-homes/sue-drive/page.tsx'),
];

const homeSharedReplacements = [
  // badge row
  ['className="ml-idaho-badges"',   'className="d-flex flex-wrap gap-2 mb-4"'],
  ['className="ml-idaho-badge"',    'className="badge bg-dark text-warning px-3 py-2 rounded-pill fs-6"'],
  ['className="ml-vantage-badges"', 'className="d-flex flex-wrap gap-2 mb-4"'],
  ['className="ml-vantage-badge"',  'className="badge bg-dark text-warning px-3 py-2 rounded-pill fs-6"'],
  ['className="ml-dela-badges"',    'className="d-flex flex-wrap gap-2 mb-4"'],
  ['className="ml-dela-badge"',     'className="badge bg-dark text-warning px-3 py-2 rounded-pill fs-6"'],
  ['className="ml-cot-badges"',     'className="d-flex flex-wrap gap-2 mb-4"'],
  ['className="ml-cot-badge"',      'className="badge bg-dark text-warning px-3 py-2 rounded-pill fs-6"'],
  ['className="ml-sue-badges"',     'className="d-flex flex-wrap gap-2 mb-4"'],
  ['className="ml-sue-badge"',      'className="badge bg-dark text-warning px-3 py-2 rounded-pill fs-6"'],

  // hero / intro header
  ['className="ml-idaho-intro-header"',  'className="py-5 bg-white"'],
  ['className="ml-vantage-intro-header"','className="py-5 bg-white"'],  // may not exist
  ['className="ml-dela-intro-header"',   'className="py-5 bg-white"'],
  ['className="ml-cot-intro-header"',    'className="py-5 bg-white"'],
  ['className="ml-sue-intro-header"',    'className="py-5 bg-white"'],

  // gallery (3-image strip at top)
  ['className="ml-idaho-gallery"',  'className="row g-3 mb-5"'],
  ['className="ml-vantage-gallery"','className="row g-3 mb-5"'],
  ['className="ml-dela-gallery"',   'className="row g-3 mb-5"'],
  ['className="ml-cot-gallery"',    'className="row g-3 mb-5"'],
  ['className="ml-sue-gallery"',    'className="row g-3 mb-5"'],

  // gallery images
  ['className="ml-idaho-gal-img"',  'className="col-lg-4 col-md-4 col-6 rounded-4 overflow-hidden shadow-sm"'],
  ['className="ml-vantage-gal-img"','className="col-lg-4 col-md-4 col-6 rounded-4 overflow-hidden shadow-sm"'],
  ['className="ml-dela-gal-img"',   'className="col-lg-4 col-md-4 col-6 rounded-4 overflow-hidden shadow-sm"'],
  ['className="ml-cot-gal-img"',    'className="col-lg-4 col-md-4 col-6 rounded-4 overflow-hidden shadow-sm"'],
  ['className="ml-sue-gal-img"',    'className="col-lg-4 col-md-4 col-6 rounded-4 overflow-hidden shadow-sm"'],

  // amenities section
  ['className="ml-idaho-amenities"',  'className="py-5 bg-light"'],
  ['className="ml-vantage-amenities"','className="py-5 bg-light"'],
  ['className="ml-dela-amenities"',   'className="py-5 bg-light"'],
  ['className="ml-cot-amenities"',    'className="py-5 bg-light"'],
  ['className="ml-sue-amenities"',    'className="py-5 bg-light"'],

  // amenity grid
  ['className="ml-vantage-grid-4"', 'className="row g-4"'],

  // amenity cards
  ['className="ml-idaho-am-card"',  'className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm"'],
  ['className="ml-vantage-am-card"','className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm"'],
  ['className="ml-dela-am-card"',   'className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm"'],
  ['className="ml-cot-am-card"',    'className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm"'],
  ['className="ml-sue-am-card"',    'className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center bg-white p-4 rounded-4 shadow-sm"'],

  // amenity icons
  ['className="ml-idaho-am-icon"',  'className="text-warning mb-3" style={{ width: "32px", height: "32px" }}'],
  ['className="ml-vantage-am-icon"','className="text-warning mb-3" style={{ width: "32px", height: "32px" }}'],
  ['className="ml-dela-am-icon"',   'className="text-warning mb-3" style={{ width: "32px", height: "32px" }}'],
  ['className="ml-cot-am-icon"',    'className="text-warning mb-3" style={{ width: "32px", height: "32px" }}'],
  ['className="ml-sue-am-icon"',    'className="text-warning mb-3" style={{ width: "32px", height: "32px" }}'],

  // amenity text
  ['className="ml-idaho-am-text"',  'className="fw-medium text-secondary small"'],
  ['className="ml-vantage-am-text"','className="fw-medium text-secondary small"'],
  ['className="ml-dela-am-text"',   'className="fw-medium text-secondary small"'],
  ['className="ml-cot-am-text"',    'className="fw-medium text-secondary small"'],
  ['className="ml-sue-am-text"',    'className="fw-medium text-secondary small"'],

  // full gallery section (vantage only)
  ['className="ml-vantage-full-gal-sec"',  'className="py-5 bg-white"'],
  ['className="ml-vantage-full-gal-grid"', 'className="row g-3"'],
  ['className="ml-vantage-full-gal-card span-2"', 'className="col-lg-8 col-md-8 rounded-4 overflow-hidden shadow-sm"'],
  ['className="ml-vantage-full-gal-card"', 'className="col-lg-4 col-md-4 rounded-4 overflow-hidden shadow-sm"'],

  // map section
  ['className="ml-idaho-map-sec"',   'className="py-5 bg-light"'],
  ['className="ml-vantage-map-sec"', 'className="py-5 bg-light"'],
  ['className="ml-dela-map-sec"',    'className="py-5 bg-light"'],
  ['className="ml-cot-map-sec"',     'className="py-5 bg-light"'],
  ['className="ml-sue-map-sec"',     'className="py-5 bg-light"'],

  ['className="ml-idaho-map-grid"',   'className="row g-5 align-items-center"'],
  ['className="ml-vantage-map-grid"', 'className="row g-5 align-items-center"'],
  ['className="ml-dela-map-grid"',    'className="row g-5 align-items-center"'],
  ['className="ml-cot-map-grid"',     'className="row g-5 align-items-center"'],
  ['className="ml-sue-map-grid"',     'className="row g-5 align-items-center"'],

  ['className="ml-idaho-map-info"',   'className="col-lg-5"'],
  ['className="ml-vantage-map-info"', 'className="col-lg-5"'],
  ['className="ml-dela-map-info"',    'className="col-lg-5"'],
  ['className="ml-cot-map-info"',     'className="col-lg-5"'],
  ['className="ml-sue-map-info"',     'className="col-lg-5"'],

  ['className="ml-idaho-map-title"',   'className="h3 fw-bold mb-4"'],
  ['className="ml-vantage-map-title"', 'className="h3 fw-bold mb-4"'],
  ['className="ml-dela-map-title"',    'className="h3 fw-bold mb-4"'],
  ['className="ml-cot-map-title"',     'className="h3 fw-bold mb-4"'],
  ['className="ml-sue-map-title"',     'className="h3 fw-bold mb-4"'],

  ['className="ml-idaho-map-addr"',   'className="mb-4 d-flex align-items-start gap-2 text-secondary"'],
  ['className="ml-vantage-map-addr"', 'className="mb-4 d-flex align-items-start gap-2 text-secondary"'],
  ['className="ml-dela-map-addr"',    'className="mb-4 d-flex align-items-start gap-2 text-secondary"'],
  ['className="ml-cot-map-addr"',     'className="mb-4 d-flex align-items-start gap-2 text-secondary"'],
  ['className="ml-sue-map-addr"',     'className="mb-4 d-flex align-items-start gap-2 text-secondary"'],

  ['className="ml-idaho-map-notes"',   'className="text-secondary small"'],
  ['className="ml-vantage-map-notes"', 'className="text-secondary small"'],
  ['className="ml-dela-map-notes"',    'className="text-secondary small"'],
  ['className="ml-cot-map-notes"',     'className="text-secondary small"'],
  ['className="ml-sue-map-notes"',     'className="text-secondary small"'],

  ['className="ml-idaho-iframe-wrap"',   'className="col-lg-7 rounded-4 overflow-hidden shadow-sm" style={{ height: "380px" }}'],
  ['className="ml-vantage-iframe-wrap"', 'className="col-lg-7 rounded-4 overflow-hidden shadow-sm" style={{ height: "380px" }}'],
  ['className="ml-dela-iframe-wrap"',    'className="col-lg-7 rounded-4 overflow-hidden shadow-sm" style={{ height: "380px" }}'],
  ['className="ml-cot-iframe-wrap"',     'className="col-lg-7 rounded-4 overflow-hidden shadow-sm" style={{ height: "380px" }}'],
  ['className="ml-sue-iframe-wrap"',     'className="col-lg-7 rounded-4 overflow-hidden shadow-sm" style={{ height: "380px" }}'],
];

for (const hp of homePaths) {
  fixFile(hp, homeSharedReplacements);
}

// ============================================================
// admissions/page.tsx
// ============================================================
fixFile(path.join(src, 'src/app/admissions/page.tsx'), [
  ['className="ml-adm-intro-box"',      'className="bg-white p-5 rounded-4 shadow-sm mb-5"'],
  ['className="ml-adm-form-sec"',       'className="py-5 bg-white"'],
  ['className="ml-adm-costs-sec"',      'className="py-5 bg-light"'],
  ['className="ml-adm-costs-grid"',     'className="row g-4"'],
  ['className="ml-adm-cost-card"',      'className="col-lg-3 col-md-6 d-flex flex-column bg-white p-4 rounded-4 shadow-sm text-center h-100"'],
  ['className="ml-adm-cost-icon"',      'className="text-warning mb-3 mx-auto" style={{ width: "40px", height: "40px" }}'],
  ['className="ml-adm-cost-title"',     'className="h5 fw-bold mb-2"'],
  ['className="ml-adm-cost-desc"',      'className="text-secondary small mb-0"'],
  ['className="ml-adm-split-sec"',      'className="py-5 bg-white"'],
  ['className="ml-adm-split-grid"',     'className="row g-5 align-items-start"'],
  ['className="ml-adm-split-card"',     'className="col-lg-6"'],
  ['className="ml-adm-split-title"',    'className="h3 fw-bold mb-4"'],
  ['className="ml-adm-checklist"',      'className="list-unstyled d-flex flex-column gap-3"'],
  ['className="ml-adm-check-item"',     'className="d-flex align-items-start gap-3 bg-light p-3 rounded-3"'],
  ['className="ml-adm-check-mark"',     'className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }}'],
  ['className="ml-adm-process-sec"',    'className="py-5 bg-light"'],
  ['className="ml-adm-partners-sec"',   'className="py-5 bg-white"'],
  ['className="ml-adm-partner-box"',    'className="bg-dark text-light p-5 rounded-4 shadow text-center"'],
  ['className="ml-partner-content"',    'className="mb-4"'],
  ['className="ml-after-grid-2"',       'className="row g-4"'],
  ['className="ml-helpline-text"',      'className="text-secondary small mt-2 mb-0"'],
]);

// ============================================================
// legal pages – privacy, tos, hipaa
// ============================================================
const legalFiles = [
  path.join(src, 'src/app/privacy-policy/page.tsx'),
  path.join(src, 'src/app/terms-of-service/page.tsx'),
  path.join(src, 'src/app/hipaa-privacy-notice/page.tsx'),
];

const legalReplacements = [
  // privacy-policy
  ['className="ml-prv-layout-grid"',    'className="row g-5"'],
  ['className="ml-prv-sidebar"',        'className="col-lg-3"'],
  ['className="ml-prv-toc-ml-container"','className="bg-white p-4 rounded-4 shadow-sm sticky-top" style={{ top: "1.5rem" }}'],
  ['className="ml-prv-toc-header"',     'className="d-flex align-items-center mb-3 pb-2 border-bottom"'],
  ['className="ml-prv-toc-icon"',       'className="text-warning me-2" style={{ width: "20px", height: "20px" }}'],
  ['className="ml-prv-toc-list"',       'className="list-unstyled d-flex flex-column gap-2 mb-0"'],
  ['className="ml-prv-toc-link"',       'className="text-decoration-none text-secondary small hover-warning"'],
  ['className="ml-prv-content-box"',    'className="col-lg-9"'],
  ['className="ml-prv-last-updated"',   'className="text-secondary small mb-5 fw-medium"'],
  ['className="ml-prv-section"',        'className="mb-5 pb-4 border-bottom"'],
  ['className="ml-prv-disclaimer-box"', 'className="bg-warning bg-opacity-10 border border-warning rounded-4 p-4 mt-5"'],
  // terms-of-service
  ['className="ml-tos-layout-grid"',    'className="row g-5"'],
  ['className="ml-tos-sidebar"',        'className="col-lg-3"'],
  ['className="ml-tos-toc-ml-container"','className="bg-white p-4 rounded-4 shadow-sm sticky-top" style={{ top: "1.5rem" }}'],
  ['className="ml-tos-toc-header"',     'className="d-flex align-items-center mb-3 pb-2 border-bottom"'],
  ['className="ml-tos-toc-icon"',       'className="text-warning me-2" style={{ width: "20px", height: "20px" }}'],
  ['className="ml-tos-toc-list"',       'className="list-unstyled d-flex flex-column gap-2 mb-0"'],
  ['className="ml-tos-toc-link"',       'className="text-decoration-none text-secondary small hover-warning"'],
  ['className="ml-tos-content-box"',    'className="col-lg-9"'],
  ['className="ml-tos-last-updated"',   'className="text-secondary small mb-5 fw-medium"'],
  ['className="ml-tos-section"',        'className="mb-5 pb-4 border-bottom"'],
  ['className="ml-tos-disclaimer-box"', 'className="bg-warning bg-opacity-10 border border-warning rounded-4 p-4 mt-5"'],
  // hipaa
  ['className="ml-hpa-layout-grid"',    'className="row g-5"'],
  ['className="ml-hpa-sidebar"',        'className="col-lg-3"'],
  ['className="ml-hpa-toc-ml-container"','className="bg-white p-4 rounded-4 shadow-sm sticky-top" style={{ top: "1.5rem" }}'],
  ['className="ml-hpa-toc-header"',     'className="d-flex align-items-center mb-3 pb-2 border-bottom"'],
  ['className="ml-hpa-toc-icon"',       'className="text-warning me-2" style={{ width: "20px", height: "20px" }}'],
  ['className="ml-hpa-toc-list"',       'className="list-unstyled d-flex flex-column gap-2 mb-0"'],
  ['className="ml-hpa-toc-link"',       'className="text-decoration-none text-secondary small hover-warning"'],
  ['className="ml-hpa-content-box"',    'className="col-lg-9"'],
  ['className="ml-hpa-last-updated"',   'className="text-secondary small mb-5 fw-medium"'],
  ['className="ml-hpa-section"',        'className="mb-5 pb-4 border-bottom"'],
  ['className="ml-hpa-disclaimer-box"', 'className="bg-warning bg-opacity-10 border border-warning rounded-4 p-4 mt-5"'],
];

for (const lf of legalFiles) {
  fixFile(lf, legalReplacements);
}

console.log('\n✅ All ml- class replacements complete!');
