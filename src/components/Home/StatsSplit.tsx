"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";
import FadeIn from "../FadeIn";

export default function StatsSplit() {
  return (
    <section className="py-5 bg-charcoal">
      <div className="container py-lg-4">
        <div className="row g-5 align-items-center">

          {/* Left Column: Photo collage of real interiors */}
          <FadeIn className="col-lg-6">
            <div className="position-relative">
              {/* Main large photo — kitchen island */}
              <div className="rounded-4 overflow-hidden shadow-lg position-relative" style={{ height: "420px" }}>
                <Image
                  src="/cottage-pictures/6.png"
                  alt="Premium granite kitchen island at Manageable Living Cottage at Delasandri"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 40%" }}
                  sizes="(max-width: 992px) 100vw, 50vw"
                  loading="lazy"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
              </div>

              {/* Floating mini-card: living room */}
              <div
                className="position-absolute rounded-4 overflow-hidden shadow-lg border border-white"
                style={{ width: "160px", height: "120px", bottom: "-20px", right: "-16px", borderWidth: "3px !important" }}
              >
                <Image
                  src="/idaho-drive-pictures/9.png"
                  alt="Modern living room at Idaho Drive men's sober living League City"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="160px"
                  loading="lazy"
                />
              </div>

              {/* Floating stat pill */}
              <div
                className="position-absolute d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-lg"
                style={{ background: "#111", top: "1.25rem", left: "1.25rem" }}
              >
                <span style={{ color: "#d2af78", fontWeight: 700, fontSize: "1.1rem", fontFamily: "var(--font-heading)" }}>12+</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Years of Recovery Housing</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Why choose us */}
          <div className="col-lg-6">
            <SlideUp>
              <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2 fw-bold" style={{ letterSpacing: "0.1em", fontSize: "0.65rem" }}>Why Choose Us</span>
              <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Why Choose{" "}
                <span className="text-warning">Manageable Living</span>?
              </h2>
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                We combine the structure of a premium recovery program with the comfort of a high-end residence — ensuring higher long-term success rates through a seamless transition into independent living.
              </p>
            </SlideUp>

            {/* Feature rows with real photo thumbnails */}
            <div className="d-flex flex-column gap-3 mb-5">
              {[
                { src: "/delasandri-pictures/11.png", alt: "Exterior of Delasandri Lane women's sober home", label: "Real Homes, Real Community", desc: "5 fully furnished residences you can tour before committing." },
                { src: "/vantage-pictures/6.png", alt: "Living room at Vantage Pointe", label: "Structured, Not Strict", desc: "Accountability built around your recovery — not rules for rules' sake." },
                { src: "/sue-drive-pictures/7.png", alt: "Kitchen at Sue Drive sober living", label: "24/7 Peer & Staff Support", desc: "House managers live on-site and are reachable around the clock." },
              ].map((f, i) => (
                <SlideUp key={f.label} delay={0.2 + i * 0.1}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-black">
                    <div className="position-relative rounded-3 overflow-hidden flex-shrink-0" style={{ width: "60px", height: "60px" }}>
                      <Image src={f.src} alt={f.alt} fill style={{ objectFit: "cover" }} sizes="60px" loading="lazy" />
                    </div>
                    <div>
                      <div className="fw-bold mb-1" style={{ fontSize: "0.9rem" }}>{f.label}</div>
                      <div className="text-secondary" style={{ fontSize: "0.8rem" }}>{f.desc}</div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>

            <SlideUp delay={0.5}>
              <a href="/about-us/" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" style={{ letterSpacing: "0.06em" }}>
                Learn More About Us
              </a>
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}
