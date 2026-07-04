"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";
import FadeIn from "../FadeIn";

export default function AboutSection() {
  return (
    <section className="bg-black py-5 position-relative overflow-hidden">
      <div className="container py-lg-5 position-relative">

        {/* Header */}
        <SlideUp className="text-center mb-5 pb-lg-4">
          <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2 fw-bold" style={{ letterSpacing: "0.1em", fontSize: "0.65rem" }}>About Us</span>
          <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            We Believe Recovery is a{" "}
            <span className="text-warning">Manageable Journey</span>
          </h2>
          <div className="text-secondary mx-auto" style={{ maxWidth: "800px", lineHeight: 1.8 }}>
            <p className="mb-3">
              At Manageable Living, we provide safe, structured, and supportive sober living environments for individuals rebuilding their lives after addiction. Our mission is to create communities where accountability, stability, and personal growth support long-term sobriety.
            </p>
            <p className="mb-0">
              Recovery does not end after treatment — it begins with having the right environment, the right support system, and the right people surrounding you.
            </p>
          </div>
        </SlideUp>

        {/* Content Grid */}
        <div className="row align-items-stretch g-4">

          {/* Left: stacked real photos */}
          <div className="col-lg-5">
            <FadeIn delay={0.2}>
              <div className="d-flex flex-column gap-3 h-100">
                {/* Main photo — Vantage Pointe exterior */}
                <div className="rounded-4 overflow-hidden shadow-lg position-relative flex-fill" style={{ minHeight: "320px" }}>
                  <Image
                    src="/vantage-pictures/1.png"
                    alt="Manageable Living Vantage Pointe sober living home exterior in League City TX"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 992px) 100vw, 42vw"
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem" }}>
                    <div className="text-white fw-bold" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Vantage Pointe</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>League City, TX</div>
                  </div>
                </div>
                {/* Secondary: Cottage exterior */}
                <div className="rounded-4 overflow-hidden shadow position-relative" style={{ height: "180px" }}>
                  <Image
                    src="/cottage-pictures/1.png"
                    alt="Cottage at Delasandri sober living home exterior Kemah TX"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 45%" }}
                    sizes="(max-width: 992px) 100vw, 42vw"
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "0.75rem", left: "1.25rem" }}>
                    <div className="text-white fw-bold" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Cottage at Delasandri</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>Kemah, TX</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: 4 value pillars */}
          <div className="col-lg-7">
            <div className="row g-4 h-100">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                  title: "Accountability", desc: "House rules, peer accountability, and structured routines keep every resident on track.", delay: 0.3
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                  title: "Stability", desc: "A safe, professionally managed environment provides the foundation recovery needs.", delay: 0.4
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                  title: "Personal Growth", desc: "Life skills, employment support, and personal development coaching built in.", delay: 0.5
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                  title: "Community", desc: "Peer-driven connections that build lasting, authentic recovery networks.", delay: 0.6
                },
              ].map((p) => (
                <div className="col-md-6" key={p.title}>
                  <SlideUp delay={p.delay} className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-charcoal" style={{ transition: "transform 0.2s, box-shadow 0.2s" }}>
                    <div className="text-warning mb-3">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="44" height="44">{p.icon}</svg>
                    </div>
                    <h3 className="fs-5 fw-bold mb-2">{p.title}</h3>
                    <p className="text-secondary mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{p.desc}</p>
                  </SlideUp>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
