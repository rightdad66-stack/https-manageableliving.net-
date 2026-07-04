import FadeIn from "@/components/FadeIn";
import SlideUp from "@/components/SlideUp";
import AdmissionsForm from "@/components/AdmissionsForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Manageable Living",
  description: "Learn more about our Admissions at Manageable Living.",
};

export default function Page() {
  return (
    <FadeIn>
      {/* Content auto-generated from Admissions_Page_Block.html */}
      <div className="bg-black min-vh-100 pb-5">
  
  
  <header className="bg-dark text-light py-5 position-relative overflow-hidden">
    <div className="container py-lg-4">
      <span className="text-warning text-uppercase small fw-bold mb-3 d-block" style={{ letterSpacing: "0.05em" }}>Home / Admissions</span>
      <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>How to Apply for Sober Living at Manageable Living</h1>
      <p className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}>Confidential, compassionate, and stress-free intake process guiding you from first contact to move-in day.</p>
    </div>
  </header>

  
  <section className="py-5 bg-black">
    <div className="container py-lg-4">
      <div className="bg-charcoal p-5 rounded-4 shadow-sm mb-5">
        We&apos;ve made the admissions process as simple and stress-free as possible. From first contact to move-in day, our team guides you every step of the way. All inquiries are confidential.
      </div>

      <div className="row g-4">
        
        <article className="col-lg-3 col-md-6 text-center position-relative">
          <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)", boxShadow: "0 0 20px rgba(210, 175, 120, 0.4)" }} aria-hidden="true">1</div>
          <h3 className="h5 fw-bold mb-2">Call or Apply Online</h3>
          <p className="text-secondary small">Reach out to our team 24/7 by phone, text, or our online application form below. We respond within 1 hour during business hours, and our crisis line is always available.</p>
        </article>

        <article className="col-lg-3 col-md-6 text-center position-relative">
          <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)", boxShadow: "0 0 20px rgba(210, 175, 120, 0.4)" }} aria-hidden="true">2</div>
          <h3 className="h5 fw-bold mb-2">Free Assessment</h3>
          <p className="text-secondary small">A brief, compassionate phone assessment with our intake coordinator helps us understand your situation, background, and match you with the right home and program.</p>
        </article>

        <article className="col-lg-3 col-md-6 text-center position-relative">
          <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)", boxShadow: "0 0 20px rgba(210, 175, 120, 0.4)" }} aria-hidden="true">3</div>
          <h3 className="h5 fw-bold mb-2">Home Placement</h3>
          <p className="text-secondary small">We place you in the best-fit home based on your needs, location preference, and recovery goals. You&apos;ll receive our House Agreement to review before committing.</p>
        </article>

        <article className="col-lg-3 col-md-6 text-center position-relative">
          <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)", boxShadow: "0 0 20px rgba(210, 175, 120, 0.4)" }} aria-hidden="true">4</div>
          <h3 className="h5 fw-bold mb-2">Move In & Begin</h3>
          <p className="text-secondary small">On move-in day, you&apos;ll be welcomed by your house manager and community. We&apos;ll walk you through the home, amenities, and help you settle in comfortably.</p>
        </article>

      </div>
    </div>
  </section>

  
  <section className="py-5 bg-charcoal" id="apply-form">
    <div className="container py-lg-4">
      
      <AdmissionsForm />

    </div>
  </section>

  
  <section className="py-5 bg-charcoal">
    <div className="container py-lg-4">
      <div className="row g-5 align-items-start">
        
        
        <article className="col-lg-6">
          <h2 className="h3 fw-bold mb-4 d-flex align-items-center gap-2">
            <span className="text-warning flex-shrink-0" style={{ width: "28px", height: "28px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path></svg></span>
            <span>Eligibility Requirements</span>
          </h2>
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Must be 18 years of age or older</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Must be committed to sobriety & willing to follow house rules</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Completion of detox or inpatient treatment preferred (not always required)</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Willingness to attend a minimum of 3 recovery meetings per week</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Ability to cover monthly rent (financial options available)</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Agreement to submit to random drug and alcohol testing</span></li>
          </ul>
        </article>

        
        <article className="col-lg-6">
          <h2 className="h3 fw-bold mb-4 d-flex align-items-center gap-2">
            <span className="text-warning flex-shrink-0" style={{ width: "28px", height: "28px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 4.506v-.459c0-.458-.293-.86-.733-.976m0 3.327a12.86 12.86 0 01-1.92 1.34m0 0a12.86 12.86 0 01-1.92-1.34m3.84 0a12.86 12.86 0 00-1.92-1.34m0 0c-.394-.276-.84-.442-1.312-.48a17.2 17.2 0 00-5.232 0c-.472.038-.918.204-1.312.48m-3.84 0a12.86 12.86 0 00-1.92 1.34m0 0a12.86 12.86 0 00-1.92 1.34m3.84 0a12.86 12.86 0 01-1.92 1.34"></path></svg></span>
            <span>What to Bring on Move-In Day</span>
          </h2>
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Valid government-issued photo ID</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Social Security card or number (for records)</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Insurance card (if applicable)</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Personal clothing, toiletries, and personal items</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Prescription medications (must be declared and approved)</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>First month&apos;s payment</span></li>
            <li className="d-flex align-items-start gap-3 bg-black p-3 rounded-3"><div className="text-warning flex-shrink-0 mt-1" style={{ width: "22px", height: "22px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span>Any documentation from treatment facility or outpatient provider</span></li>
          </ul>
        </article>

      </div>
    </div>
  </section>

  
  <section className="py-5 bg-black">
    <div className="container py-lg-4">
      <div className="text-center mb-5">
        <h2>Costs, Payment & Financial Options</h2>
      </div>

      <div className="row g-4">
        
        <article className="col-lg-3 col-md-6 d-flex flex-column bg-charcoal p-4 rounded-4 shadow-sm text-center h-100">
          <div className="text-warning mb-3 mx-auto" style={{ width: "40px", height: "40px" }} aria-hidden="true">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="h5 fw-bold mb-2">Monthly Rate</h3>
          <p className="text-secondary small mb-0">Our monthly rate includes all utilities, high-speed WiFi, and in-house laundry facilities. Contact our admissions team for current room pricing and availability.</p>
        </article>

        <article className="col-lg-3 col-md-6 d-flex flex-column bg-charcoal p-4 rounded-4 shadow-sm text-center h-100">
          <div className="text-warning mb-3 mx-auto" style={{ width: "40px", height: "40px" }} aria-hidden="true">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path></svg>
          </div>
          <h3 className="h5 fw-bold mb-2">Payment Methods</h3>
          <p className="text-secondary small mb-0">We accept cash, check, money order, and secure electronic payments. Flexible installment plans can be considered upon request during intake.</p>
        </article>

        <article className="col-lg-3 col-md-6 d-flex flex-column bg-charcoal p-4 rounded-4 shadow-sm text-center h-100">
          <div className="text-warning mb-3 mx-auto" style={{ width: "40px", height: "40px" }} aria-hidden="true">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"></path></svg>
          </div>
          <h3 className="h5 fw-bold mb-2">Insurance Policy</h3>
          <p className="text-secondary small mb-0">Sober living fees are not typically covered by health insurance. However, we can provide necessary documentation for reimbursement or case management coordination.</p>
        </article>

        <article className="col-lg-3 col-md-6 d-flex flex-column bg-charcoal p-4 rounded-4 shadow-sm text-center h-100">
          <div className="text-warning mb-3 mx-auto" style={{ width: "40px", height: "40px" }} aria-hidden="true">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path></svg>
          </div>
          <h3 className="h5 fw-bold mb-2">Financial Help</h3>
          <p className="text-secondary small mb-0">If cost is a concern, please speak directly with our team during your assessment. We will do our absolute best to help find a workable solution for your recovery.</p>
        </article>

      </div>
    </div>
  </section>

  
  <section className="py-5 bg-charcoal">
    <div className="container py-lg-4">
      <div className="bg-dark text-light p-5 rounded-4 shadow text-center">
        <div className="mb-4">
          <h2>Treatment Center Coordination</h2>
          <p>
            Manageable Living works directly with treatment centers to ensure seamless step-down transitions for their patients. If you are a treatment provider looking to coordinate a patient discharge, please call us directly. We work with exclusive treatment partners to ensure continuity of care when a resident needs a higher level of support.
          </p>
        </div>
        <div>
          <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" style={{width: "100%", textAlign: "center", }}>PROVIDER LINE</a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-charcoal text-light py-5 text-center mt-5">
    <div className="container py-lg-4">
      <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Take the First Step Toward Your New Life</h2>
      <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}>
        Our admissions coordinators are available 24/7 to answer your questions and help you reserve a bed at one of our premier Texas residences.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <a href="#apply-form" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Apply online for Sober Living">APPLY ONLINE</a>
        <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Call admissions now">CALL US 24/7</a>
      </div>
    </div>
  </section>

</div>



    </FadeIn>
  );
}
