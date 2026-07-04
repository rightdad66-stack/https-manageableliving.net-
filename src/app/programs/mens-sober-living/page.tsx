import SlideUp from "@/components/SlideUp";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Sober Living in Texas | Manageable Living",
  description: "Our men's sober living homes provide a structured, drug-free environment where male residents can focus on their recovery.",
};

export default function MensSoberLivingPage() {
  return (
    <div className="bg-black min-vh-100 pb-5">
      
      {/* 1. HERO SECTION */}
      <header className="bg-dark text-light py-5 position-relative overflow-hidden">
        <div className="container py-lg-4">
          <SlideUp>
            <span className="text-warning text-uppercase small fw-bold mb-3 d-block" style={{ letterSpacing: "0.05em" }}>Programs / Men&apos;s Sober Living</span>
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Men&apos;s Sober Living in Texas — Brotherhood, Accountability, Recovery</h1>
            <p className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}>A structured, drug-free environment built on peer support and practical life skills.</p>
          </SlideUp>
        </div>
      </header>

      {/* 2. INTRO SECTION */}
      <section className="bg-charcoal">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <SlideUp className="col-lg-6 d-flex align-items-center p-5" style={{ minHeight: "80vh" }}>
              <div className="w-100" style={{ maxWidth: "550px", marginLeft: "auto", marginRight: "5%" }}>
                <h2 className="display-5 fw-normal mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Building Sustainable Sobriety Together
                </h2>
                <p className="text-light" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  Our men&apos;s sober living homes provide a structured, drug-free environment where male residents can focus on their recovery while building the life skills and community connections that make sobriety sustainable.
                </p>
                <p className="text-light" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  Led by experienced house managers, our homes combine accountability with genuine compassion — because we know that long-term sobriety requires both.
                </p>
              </div>
            </SlideUp>
            <FadeIn className="col-lg-6 position-relative d-none d-lg-block" aria-hidden="true" delay={0.2}>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Men in recovery supporting each other in a group discussion" 
                className="position-absolute w-100 h-100" 
                style={{ objectFit: "cover", top: 0, left: 0 }} 
                loading="lazy" 
                decoding="async" 
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <section className="py-5 bg-black">
        <div className="container py-lg-4">
          <SlideUp className="text-center mb-5">
            <h2>What&apos;s Included in Our Men&apos;s Homes</h2>
          </SlideUp>

          <div className="row g-4">
            
            <SlideUp delay={0.1} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Furnished private and shared rooms in safe neighborhoods</div>
            </SlideUp>

            <SlideUp delay={0.2} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Male house manager on-site or on-call</div>
            </SlideUp>

            <SlideUp delay={0.3} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Weekly house meetings and individual check-ins</div>
            </SlideUp>

            <SlideUp delay={0.4} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Minimum 3 recovery meetings per week (AA/NA)</div>
            </SlideUp>

            <SlideUp delay={0.5} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Random drug and alcohol testing</div>
            </SlideUp>

            <SlideUp delay={0.6} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Structured curfew and house agreement</div>
            </SlideUp>

            <SlideUp delay={0.7} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m8.25-3a4.5 4.5 0 01-1.15 3.02 6 6 0 01-4.1 1.48H5.85a6 6 0 01-4.1-1.48A4.5 4.5 0 01.6 18v-5.25c0-.621.504-1.125 1.125-1.125h20.55c.621 0 1.125.504 1.125 1.125V18z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Full kitchen, WiFi, and laundry facilities</div>
            </SlideUp>

            <SlideUp delay={0.8} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Employment support and life skills access</div>
            </SlideUp>

            <SlideUp delay={0.9} className="col-lg-4 col-md-6 d-flex flex-column align-items-center text-center bg-charcoal p-4 rounded-4 shadow-sm h-100">
              <div className="text-warning mb-3" style={{ width: "48px", height: "48px" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path></svg>
              </div>
              <div className="text-secondary fw-medium">Peer mentorship and community activities</div>
            </SlideUp>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-5 bg-charcoal">
        <div className="container py-lg-4">
          <SlideUp className="text-center mb-5">
            <h2>How It Works: 4 Steps to Move In</h2>
          </SlideUp>

          <div className="row g-4">
            
            <SlideUp delay={0.1} className="col-lg-3 col-md-6 text-center position-relative">
              <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }} aria-hidden="true">1</div>
              <h3 className="h5 fw-bold mb-2">Call or Apply Online</h3>
              <p className="text-secondary small">Reach out to our team 24/7 by phone, text, or our online application form. We respond within 1 hour during business hours.</p>
            </SlideUp>

            <SlideUp delay={0.2} className="col-lg-3 col-md-6 text-center position-relative">
              <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }} aria-hidden="true">2</div>
              <h3 className="h5 fw-bold mb-2">Free Assessment</h3>
              <p className="text-secondary small">A brief, compassionate phone call with our intake coordinator helps us understand your situation and match you with the right home.</p>
            </SlideUp>

            <SlideUp delay={0.3} className="col-lg-3 col-md-6 text-center position-relative">
              <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }} aria-hidden="true">3</div>
              <h3 className="h5 fw-bold mb-2">Home Placement</h3>
              <p className="text-secondary small">We place you in the best-fit home based on your needs, location preference, and recovery goals. You&apos;ll review our House Agreement.</p>
            </SlideUp>

            <SlideUp delay={0.4} className="col-lg-3 col-md-6 text-center position-relative">
              <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-circle mb-3 fs-4 fw-bold" style={{ width: "60px", height: "60px", fontFamily: "var(--font-heading)" }} aria-hidden="true">4</div>
              <h3 className="h5 fw-bold mb-2">Move In & Begin</h3>
              <p className="text-secondary small">On move-in day, you&apos;ll be welcomed by your house manager and community. We&apos;ll walk you through the home and help you settle in.</p>
            </SlideUp>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-charcoal text-light py-5 text-center mt-5">
        <div className="container py-lg-4">
          <SlideUp>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Ready for Brotherhood and Accountability?</h2>
            <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}>
              Beds are available in our League City and Kemah men&apos;s homes. Reach out today to start your admissions process.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="/contact/" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Apply online for Men's Sober Living">APPLY ONLINE</a>
              <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Call admissions now">CALL US 24/7</a>
            </div>
          </SlideUp>
        </div>
      </section>

    </div>
  );
}
