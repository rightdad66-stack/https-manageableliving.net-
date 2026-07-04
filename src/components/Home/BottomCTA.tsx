"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";

export default function BottomCTA() {
  return (
    <section className="position-relative text-light py-5 text-center overflow-hidden" style={{ minHeight: "520px" }}>
      {/* Background: Vantage Pointe exterior as full bleed */}
      <Image
        src="/vantage-pictures/1.png"
        alt="Manageable Living sober home exterior"
        fill
        style={{ objectFit: "cover", objectPosition: "center 35%" }}
        sizes="100vw"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(10,15,8,0.88) 100%)" }} />

      <div className="container position-relative py-lg-5" style={{ zIndex: 1 }}>

        {/* Photo strip — 5 home thumbnails */}
        <SlideUp className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {[
            { src: "/idaho-drive-pictures/7.png", label: "Idaho Drive" },
            { src: "/vantage-pictures/6.png", label: "Vantage Pointe" },
            { src: "/delasandri-pictures/11.png", label: "Delasandri" },
            { src: "/sue-drive-pictures/2.png", label: "Sue Drive" },
            { src: "/cottage-pictures/1.png", label: "Cottage" },
          ].map((h) => (
            <div key={h.label} className="position-relative rounded-3 overflow-hidden" style={{ width: "80px", height: "60px", border: "2px solid rgba(210, 175, 120,0.3)" }}>
              <Image src={h.src} alt={h.label} fill style={{ objectFit: "cover" }} sizes="80px" loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
              <div style={{ position: "absolute", bottom: "3px", left: 0, right: 0, textAlign: "center", color: "#fff", fontSize: "0.45rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{h.label}</div>
            </div>
          ))}
        </SlideUp>

        <SlideUp className="mx-auto" style={{ maxWidth: "800px" }}>
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", border: "1px solid rgba(210, 175, 120,0.25)", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
            Beds Available Now
          </span>
          <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            A Safe Home. A Strong Community.<br />
            <span className="text-warning">A New Beginning.</span>
          </h2>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "640px", margin: "0 auto 2rem" }}>
            Whether you are stepping down from detox, residential treatment, PHP, or IOP — our goal is to provide the stable foundation where your recovery can continue to thrive. Reach out today.
          </p>
        </SlideUp>

        <SlideUp delay={0.2} className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
          <a href="/admissions/" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow" style={{ letterSpacing: "0.06em" }} aria-label="Apply for Admission to Manageable Living">
            Apply for Admission
          </a>
          <a href="tel:0017134099594" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase" style={{ letterSpacing: "0.06em", borderColor: "rgba(255,255,255,0.2)" }} aria-label="Call Us 24/7">
            📞 (713) 409-9594
          </a>
        </SlideUp>

        <SlideUp delay={0.3} className="text-secondary small d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase" style={{ letterSpacing: "0.06em" }}>
          <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2.166 4.9L10 1.154l7.834 3.746A1 1 0 0118.5 5.8v4.613c0 4.148-2.617 7.744-6.592 9.124l-.841.293a2 2 0 01-1.34 0l-.842-.293C4.845 18.157 2.227 14.56 2.227 10.413V5.8a1 1 0 01.666-.9zM10 12a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-7a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          All inquiries are 100% confidential and HIPAA-compliant.
        </SlideUp>
      </div>
    </section>
  );
}
