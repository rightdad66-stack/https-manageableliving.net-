"use client";

import FadeIn from "../FadeIn";

export default function TrustSignals() {
  return (
    <section className="bg-dark text-light py-4 border-bottom border-secondary border-opacity-25">
      <FadeIn className="container">
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-3 gap-lg-0">
          <div className="d-flex align-items-center fw-bold text-uppercase small" style={{ letterSpacing: '0.05em' }}>
            <svg viewBox="0 0 20 20" width="18" height="18" fill="var(--bs-primary)" className="me-2" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Professionally Managed Sober Homes
          </div>
          <div className="d-flex align-items-center fw-bold text-uppercase small" style={{ letterSpacing: '0.05em' }}>
            <svg viewBox="0 0 20 20" width="18" height="18" fill="var(--bs-primary)" className="me-2" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Drug-Free — Zero Tolerance Policy
          </div>
          <div className="d-flex align-items-center fw-bold text-uppercase small" style={{ letterSpacing: '0.05em' }}>
            <svg viewBox="0 0 20 20" width="18" height="18" fill="var(--bs-primary)" className="me-2" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            24/7 Crisis Support Available
          </div>
          <div className="d-flex align-items-center fw-bold text-uppercase small" style={{ letterSpacing: '0.05em' }}>
            <svg viewBox="0 0 20 20" width="18" height="18" fill="var(--bs-primary)" className="me-2" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Treatment Center Coordination
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
