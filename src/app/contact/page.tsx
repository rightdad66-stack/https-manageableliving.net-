import FadeIn from "@/components/FadeIn";
import SlideUp from "@/components/SlideUp";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Manageable Living",
  description: "Learn more about our Contact Us at Manageable Living.",
};

export default function Page() {
  return (
    <FadeIn>
      <div className="bg-black min-vh-100 d-flex align-items-center py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            
            {/* Left Column: Typography & Trust Signals */}
            <div className="col-lg-6 pe-lg-5">
              <SlideUp>
                <div className="d-flex align-items-center mb-4">
                  <div style={{ width: "40px", height: "1px", background: "var(--blue-light)", marginRight: "15px" }}></div>
                  <span className="text-uppercase fw-bold" style={{ color: "var(--blue-light)", letterSpacing: "0.15em", fontSize: "0.75rem" }}>
                    24/7 SUPPORT & ADMISSIONS
                  </span>
                </div>
                
                <h1 className="mb-4 text-light" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 300 }}>
                  Contact made <br />
                  <span style={{ fontStyle: "italic", color: "var(--bs-primary)" }}>manageable</span> for every <br />
                  situation.
                </h1>
                
                <p className="text-secondary mb-5" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px" }}>
                  Whether you're ready to apply, have questions, or are helping a loved one — reach out. Our admissions team handles it all, compassionately and confidentially. We'll match you to the right residence.
                </p>
                
                <div className="d-flex align-items-center gap-2 mb-5">
                  <div className="d-flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} fill="var(--bs-primary)" viewBox="0 0 24 24" width="16" height="16">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-secondary small ms-2"><strong className="text-light">5.0 Rating</strong> by local Texas families</span>
                </div>
                
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a href="tel:0017134099594" className="btn btn-warning rounded-0 px-4 py-3 fw-bold text-uppercase shadow-sm hover-warning" style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                    Call Us Now &rarr;
                  </a>
                </div>
              </SlideUp>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="col-lg-6">
              <SlideUp delay={0.2}>
                <div className="position-relative">
                  {/* Outer styling to match the sharp charcoal box if needed, but ContactForm has its own card styling */}
                  <ContactForm />
                </div>
              </SlideUp>
            </div>

          </div>
        </div>
      </div>
    </FadeIn>
  );
}
