import SlideUp from "@/components/SlideUp";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Manageable Living",
  description: "Manageable Living provides safe, accountable, and structured sober living homes in League City and Kemah, TX. Learn about our homes and recovery programs.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-black min-vh-100 pb-5">
      
      {/* 1. HERO SECTION */}
      <header className="bg-dark text-light py-5 position-relative overflow-hidden">
        <div className="container py-lg-4">
          <SlideUp>
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>About Manageable Living</h1>
            <p className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}>Providing a safe, accountable foundation for lasting recovery in League City and Kemah, Texas.</p>
          </SlideUp>
        </div>
      </header>

      {/* 2. OPENING STATEMENT & PHILOSOPHY */}
      <section className="py-5 bg-charcoal">
        <div className="container py-lg-4">
          
          <SlideUp className="lead text-center mb-5 fw-medium">
            At Manageable Living, we believe that recovery is about more than just not using — it is about building a life worth living. We provide structured pathways designed for accountability, personal growth, and long-term sobriety.
          </SlideUp>

          <div className="row g-5">
            <SlideUp delay={0.2} className="col-lg-6">
              <h2 className="mb-4">Safe Homes.<br />Structured Programs.</h2>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                We operate five professionally managed sober living homes across League City and Kemah, Texas. Each home is thoughtfully furnished, drug-free, and located in a safe, quiet neighborhood close to meetings, employment, and essential services. Our homes are more than just a place to stay — they are the foundation of a new beginning.
              </p>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                Our dedicated recovery programs are designed to meet residents where they are. From Men&apos;s and Women&apos;s Sober Living, 12-Step Integration, and Life Skills Development, to Job-Friendly Housing and Aftercare Support, we equip our residents with the practical knowledge and real-world tools to thrive in a fully independent life.
              </p>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                Every service we provide is designed to help residents rebuild with confidence. Whether it&apos;s learning financial management, securing employment, or building a strong sponsor relationship, our goal is to make your recovery journey sustainable and supported.
              </p>
              <p className="fw-bold text-warning mt-4 fs-5" style={{ letterSpacing: "0.02em" }}>
                Because when you have the right support, recovery becomes manageable.
              </p>
            </SlideUp>
            <FadeIn delay={0.3} className="col-lg-6 d-flex align-items-center" aria-hidden="true">
              <img src="/idaho-drive-pictures/1.png" alt="Manageable Living Sober Living Home" className="img-fluid rounded-4 shadow" width="800" height="650" loading="lazy" decoding="async" style={{ objectFit: "cover", minHeight: "400px" }} />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-black text-light py-5 text-center mt-5">
        <div className="container py-lg-4">
          <SlideUp>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Start Your Recovery Journey Today</h2>
            <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}>
              Let&apos;s build a foundation that works for you. Reach out today and learn how our homes and programs can support your lasting recovery.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="/contact/" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Contact Manageable Living">CONTACT US</a>
              <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Call Manageable Living now">CALL US NOW</a>
            </div>
          </SlideUp>
        </div>
      </section>

    </div>
  );
}
