import SlideUp from "@/components/SlideUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Services | Manageable Living",
  description: "Explore our recovery programs including Men's and Women's sober living, 12-step integration, life skills development, job-friendly housing, and aftercare.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-black min-vh-100 pb-5">
      
      {/* 1. HERO SECTION */}
      <header className="bg-dark text-light py-5 position-relative overflow-hidden">
        <div className="container py-lg-4">
          <SlideUp>
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Our Recovery Programs & Services</h1>
            <p className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}>Structured pathways designed for accountability, personal growth, and long-term sobriety.</p>
          </SlideUp>
        </div>
      </header>

      {/* 2. INTRO SECTION */}
      <section className="py-5 bg-charcoal">
        <div className="container py-lg-4">
          <SlideUp className="lead text-center text-secondary mx-auto mb-0" style={{ maxWidth: "800px" }}>
            Every service we provide is designed to help residents rebuild with confidence — one manageable step at a time.
          </SlideUp>
        </div>
      </section>

      {/* 3. PROGRAMS GRID */}
      <section className="py-5 bg-black">
        <div className="container py-lg-4">
          <div className="row g-5">
            
            {/* PROGRAM 1: Men's Sober Living */}
            <SlideUp delay={0.1} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Men&apos;s Sober Living in Texas — Brotherhood, Accountability, Recovery</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                Our men&apos;s sober living homes provide a structured, drug-free environment where male residents can focus on their recovery while building the life skills and community connections that make sobriety sustainable. Led by experienced house managers, our homes combine accountability with genuine compassion — because we know that long-term sobriety requires both.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WHAT&apos;S INCLUDED:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Furnished private and shared rooms in safe neighborhoods</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Male house manager on-site or on-call</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Weekly house meetings and individual check-ins</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Minimum 3 recovery meetings per week (AA/NA)</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Random drug and alcohol testing</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Structured curfew and house agreement</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Full kitchen, WiFi, and laundry facilities</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Employment support and life skills access</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Peer mentorship and community activities</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/mens-sober-living/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about Men's Sober Living">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for Men's Sober Living">APPLY NOW</a>
              </div>
            </SlideUp>

            {/* PROGRAM 2: Women's Sober Living */}
            <SlideUp delay={0.2} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Women&apos;s Sober Living in Texas — Safety, Support, Sisterhood</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                Our women&apos;s sober living homes offer a trauma-informed, gender-specific environment where women in recovery can heal, grow, and rebuild their lives. With female house managers and a strong emphasis on emotional wellness and personal dignity, our homes are designed to address the unique challenges women face in recovery.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WHAT&apos;S INCLUDED:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Female-only house managers</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Trauma-informed care philosophy</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Private rooms available</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Life skills coaching: budgeting, parenting support, career guidance</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Women&apos;s AA/NA meeting connections</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Childcare resources and referrals (case-by-case)</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Safe, respectful, and empowering environment</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/womens-sober-living/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about Women's Sober Living">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for Women's Sober Living">APPLY NOW</a>
              </div>
            </SlideUp>

            {/* PROGRAM 3: 12-Step Integration */}
            <SlideUp delay={0.3} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>12-Step Integration Program</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                12-step programs have helped millions achieve lasting recovery. At Manageable Living, we integrate AA/NA meeting attendance and 12-step philosophy into our daily structure — connecting residents with local meetings, sponsors, and a larger sober community across League City and Kemah.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WHAT&apos;S INCLUDED:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Minimum 3 AA/NA meetings per week required</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Support finding and building a sponsor relationship</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Step-work guidance and resources</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Transportation to local meetings when needed</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Non-12-step alternatives considered on request</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/12-step-integration/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about 12-Step Integration">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for 12-Step Integration">APPLY NOW</a>
              </div>
            </SlideUp>

            {/* PROGRAM 4: Life Skills Development */}
            <SlideUp delay={0.4} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Life Skills Development — Building a Life Beyond Recovery</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                Recovery is about more than not using — it&apos;s about building a life worth living. Our Life Skills Development program equips residents with practical knowledge and real-world tools to thrive in fully independent life.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WORKSHOP & COACHING TOPICS:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Personal budgeting and financial management</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Cooking, nutrition, and self-care routines</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Resume writing and job interview preparation</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Healthy communication and conflict resolution</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Time management and goal setting</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Navigating healthcare and government benefits</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Rebuilding credit and financial independence</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/life-skills/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about Life Skills Development">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for Life Skills Development">APPLY NOW</a>
              </div>
            </SlideUp>

            {/* PROGRAM 5: Job-Friendly Housing */}
            <SlideUp delay={0.5} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Job-Friendly Sober Living — Work and Recover at the Same Time</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                Employment is one of the most powerful pillars of sustained recovery. Our job-friendly housing model supports residents who are working or actively seeking employment — with flexible scheduling, employer partnerships, and dedicated job coaching.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WHAT&apos;S INCLUDED:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Flexible scheduling and curfew adjustments for working residents</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Employment coaching and resume assistance</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Connections to local staffing agencies and employers</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>On-site WiFi and quiet work/study spaces</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Support with transportation to work</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/job-friendly-housing/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about Job-Friendly Sober Living">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for Job-Friendly Sober Living">APPLY NOW</a>
              </div>
            </SlideUp>

            {/* PROGRAM 6: Aftercare & Support */}
            <SlideUp delay={0.6} className="col-lg-6 col-12 d-flex flex-column card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-charcoal mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4 flex-shrink-0" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }} aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path></svg>
              </div>
              <h2 className="h3 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Aftercare & Alumni Support — We Don&apos;t Say Goodbye</h2>
              <p className="text-secondary lh-lg mb-4 flex-grow-1">
                Graduating from our sober living program is a milestone. But it&apos;s not the end of our relationship. Our aftercare program keeps former residents connected to community, support, and accountability as they transition to fully independent living.
              </p>
              <div className="fw-bold text-uppercase small text-light mb-3" style={{ letterSpacing: "0.05em" }}>WHAT&apos;S INCLUDED:</div>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Regular check-in calls from our care team</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Alumni events and peer connection opportunities</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Priority re-admission if a resident needs to return</span>
                </li>
                <li className="d-flex align-items-start mb-2 text-secondary">
                  <div className="text-warning me-2 mt-1 flex-shrink-0" style={{ width: "20px", height: "20px" }} aria-hidden="true"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Referrals to outpatient care, mental health providers, and sober social networks</span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-auto pt-4 border-top">
                <a href="/programs/aftercare-support/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Learn more about Aftercare & Alumni Support">LEARN MORE</a>
                <a href="/contact/" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-uppercase" aria-label="Apply now for Aftercare & Alumni Support">APPLY NOW</a>
              </div>
            </SlideUp>

          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="bg-charcoal text-light py-5 text-center mt-5">
        <div className="container py-lg-4">
          <SlideUp>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Start Your Recovery Journey Today</h2>
            <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}>
              Our admissions team is available 24/7 to answer your questions, verify eligibility, and help you find the right program for your needs.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="/contact/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm hover-warning" aria-label="Apply online for admission">APPLY ONLINE</a>
              <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Call admissions now">CALL US 24/7</a>
            </div>
          </SlideUp>
        </div>
      </section>

    </div>
  );
}
