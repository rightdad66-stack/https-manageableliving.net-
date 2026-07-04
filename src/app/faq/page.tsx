import FadeIn from "@/components/FadeIn";
import SlideUp from "@/components/SlideUp";
import FaqAccordion from "@/components/FaqAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Manageable Living",
  description: "Learn more about our FAQ at Manageable Living.",
};

export default function Page() {
  return (
    <FadeIn>
      {/* Content auto-generated from FAQ_Page_Block.html */}
      <div className="bg-black min-vh-100 pb-5">
  
  
  <header className="bg-dark text-light py-5 position-relative overflow-hidden">
    <div className="container py-lg-4">
      <span className="text-warning text-uppercase small fw-bold mb-3 d-block" style={{ letterSpacing: "0.05em" }}>Home / FAQ</span>
      <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Frequently Asked Questions About Sober Living</h1>
      <p className="lead text-secondary mb-0" style={{ maxWidth: "700px" }}>Find clear, honest answers about our homes, guidelines, costs, and admissions process.</p>
    </div>
  </header>

  
  <section className="py-5 bg-charcoal">
    <div className="container py-lg-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FaqAccordion />
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5 bg-black">
    <div className="container py-lg-4">
      <div className="bg-charcoal p-5 rounded-4 shadow-sm text-center">
        <div className="mb-4">
          <h2>Still Have Questions?</h2>
          <p>
            If you didn&apos;t find the answer you were looking for, our admissions team is available 24 hours a day, 7 days a week. We are here to provide confidential, compassionate guidance.
          </p>
        </div>
        <div>
          <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" style={{width: "100%", textAlign: "center", }}>CALL US 24/7</a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-charcoal text-light py-5 text-center mt-5">
    <div className="container py-lg-4">
      <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Ready to Begin Your Recovery Journey?</h2>
      <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "700px" }}>
        Beds are currently available across our League City and Kemah residences. Reach out today to reserve your place in our supportive community.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <a href="/admissions/" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Apply online for Sober Living">APPLY ONLINE</a>
        <a href="tel:0017134099594" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" aria-label="Call admissions now">CALL US 24/7</a>
      </div>
    </div>
  </section>

</div>



    </FadeIn>
  );
}
