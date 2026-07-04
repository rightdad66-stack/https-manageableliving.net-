"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-light py-5">
      <div className="container py-4">
        <div className="row g-5">
          {/* Column 1: Brand & Contact */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4 d-flex align-items-center">
              <Image src="/MS Final hori.svg" alt="Manageable Living" width={150} height={120} style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p className="text-secondary mb-4 pe-lg-4">
              Providing safe, structured, and supportive sober living environments in the Houston Bay Area since 2012.
            </p>
            <div className="d-flex flex-column gap-2 mb-4">
              <a href="tel:0017134099594" className="text-light text-decoration-none hover-warning">
                <i className="bi bi-telephone-fill text-warning me-2"></i>(713) 409-9594
              </a>
              <a href="mailto:info@manageablegroup.com" className="text-light text-decoration-none hover-warning">
                <i className="bi bi-envelope-fill text-warning me-2"></i>info@manageablegroup.com
              </a>
              <span className="text-secondary">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>League City & Kemah, TX
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4 className="fs-5 mb-4 text-white">Quick Links</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link href="/" className="text-secondary text-decoration-none hover-warning">Home</Link></li>
              <li><Link href="/about-us/" className="text-secondary text-decoration-none hover-warning">About Us</Link></li>
              <li><Link href="/our-homes/" className="text-secondary text-decoration-none hover-warning">Our Homes</Link></li>
              <li><Link href="/faq/" className="text-secondary text-decoration-none hover-warning">FAQs</Link></li>
              <li><Link href="/admissions/" className="text-secondary text-decoration-none hover-warning">Admissions</Link></li>
              <li><Link href="/contact/" className="text-secondary text-decoration-none hover-warning">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-5 mb-4 text-white">Our Programs</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link href="/programs/mens-sober-living/" className="text-secondary text-decoration-none hover-warning">Men&apos;s Housing</Link></li>
              <li><Link href="/programs/womens-sober-living/" className="text-secondary text-decoration-none hover-warning">Women&apos;s Housing</Link></li>
              <li><Link href="/programs/12-step-integration/" className="text-secondary text-decoration-none hover-warning">12-Step Integration</Link></li>
              <li><Link href="/programs/life-skills/" className="text-secondary text-decoration-none hover-warning">Life Skills</Link></li>
              <li><Link href="/programs/job-friendly-housing/" className="text-secondary text-decoration-none hover-warning">Job-Friendly Housing</Link></li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-5 mb-4 text-white">Certifications</h4>
            <div className="d-flex flex-column gap-3">
              <p className="text-secondary small mb-0">We operate in accordance with best practices for recovery residences.</p>
              <div className="bg-dark p-3 rounded border border-secondary border-opacity-25 text-center">
                <span className="text-warning fw-bold d-block mb-1">State of Texas</span>
                <span className="text-secondary small">Registered Recovery Home</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary border-opacity-25 my-5" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-secondary small mb-0">&copy; {currentYear} Manageable Living. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex flex-column gap-3 align-items-center align-items-md-end">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <Link href="/privacy/" className="text-secondary small text-decoration-none hover-warning">Privacy Policy</Link>
                <Link href="/terms/" className="text-secondary small text-decoration-none hover-warning">Terms of Service</Link>
                <Link href="/hipaa/" className="text-secondary small text-decoration-none hover-warning">HIPAA Notice</Link>
              </div>
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <a href="https://www.linkedin.com/company/manageableliving/" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning hover-bg-warning" style={{ width: "45px", height: "45px", transition: "all 0.3s ease", textDecoration: "none" }} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590282224484" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning hover-bg-warning" style={{ width: "45px", height: "45px", transition: "all 0.3s ease", textDecoration: "none" }} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="https://www.instagram.com/manageable.living/" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning hover-bg-warning" style={{ width: "45px", height: "45px", transition: "all 0.3s ease", textDecoration: "none" }} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning hover-bg-warning" style={{ width: "45px", height: "45px", transition: "all 0.3s ease", textDecoration: "none" }} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-tiktok fs-5"></i>
                </a>
                <a href="#" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning hover-bg-warning" style={{ width: "45px", height: "45px", transition: "all 0.3s ease", textDecoration: "none" }} aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter-x fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}