"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";
import FadeIn from "../FadeIn";

const reviews = [
  {
    quote: "After completing treatment, I had nowhere to go that felt safe. Manageable Living gave me a real home and a community that kept me accountable every single day. 18 months sober and still going strong.",
    name: "Marcus R.",
    home: "Idaho Drive — League City",
    photo: "/idaho-drive-pictures/7.png",
    photoAlt: "Idaho Drive kitchen",
  },
  {
    quote: "The staff here genuinely cares. The structure helped me rebuild routines I'd lost for years. I learned how to manage money, get a job, and live again.",
    name: "Sarah T.",
    home: "Cottage at Delasandri — Kemah",
    photo: "/cottage-pictures/6.png",
    photoAlt: "Cottage at Delasandri kitchen",
  },
  {
    quote: "Manageable Living treated me with dignity from day one. The coordination with my treatment team was seamless and the peer support was something I didn't know I needed.",
    name: "David K.",
    home: "Vantage Pointe — League City",
    photo: "/vantage-pictures/6.png",
    photoAlt: "Vantage Pointe living room",
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: "var(--black)" }}>

      {/* Subtle real-photo accent strip at top */}
      <div className="position-absolute top-0 start-0 end-0 overflow-hidden" style={{ height: "120px", opacity: 0.12 }} aria-hidden="true">
        <div className="d-flex h-100">
          {[
            "/delasandri-pictures/11.png",
            "/vantage-pictures/1.png",
            "/sue-drive-pictures/2.png",
            "/cottage-pictures/1.png",
          ].map((src, i) => (
            <div key={i} className="flex-fill position-relative">
              <Image src={src} alt="" fill style={{ objectFit: "cover" }} sizes="25vw" loading="lazy" />
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, #f3f4f6 100%)" }} />
      </div>

      <div className="container py-lg-5 position-relative" style={{ zIndex: 1 }}>

        <SlideUp className="text-center mb-5 pb-lg-3">
          <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2 fw-bold" style={{ letterSpacing: "0.1em", fontSize: "0.65rem" }}>Success Stories</span>
          <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Real People. Real Recovery.
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "560px", lineHeight: 1.8 }}>
            Hear from residents who rebuilt their lives through community, accountability, and the right environment.
          </p>
        </SlideUp>

        <div className="row g-4">
          {reviews.map((r, i) => (
            <div className="col-lg-4 col-md-6" key={r.name}>
              <FadeIn delay={i * 0.12}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-charcoal">
                  {/* Home thumbnail banner */}
                  <div className="position-relative" style={{ height: "90px" }}>
                    <Image src={r.photo} alt={r.photoAlt} fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="(max-width: 992px) 100vw, 33vw" loading="lazy" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))" }} />
                    <div style={{ position: "absolute", bottom: "0.5rem", left: "1rem" }}>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{r.home}</span>
                    </div>
                  </div>

                  <div className="p-4 d-flex flex-column">
                    {/* Stars */}
                    <div className="d-flex gap-1 mb-3" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} fill="#d2af78" viewBox="0 0 24 24" width="16" height="16">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-secondary mb-4 flex-grow-1 fst-italic" style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", lineHeight: 1.75 }}>
                      &ldquo;{r.quote}&rdquo;
                    </p>

                    <div className="fw-bold text-light text-uppercase small" style={{ letterSpacing: "0.05em", fontSize: "0.75rem" }}>
                      {r.name}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
