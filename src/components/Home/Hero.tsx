"use client";

import SlideUp from "../SlideUp";
import FadeIn from "../FadeIn";
import AdmissionsForm from "../AdmissionsForm";

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: "transparent",
        minHeight: "100vh",
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(210, 175, 120,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(210, 175, 120,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative py-5" style={{ paddingTop: "6rem !important", paddingBottom: "6rem !important" }}>
        <div className="row align-items-center g-5" style={{ minHeight: "calc(100vh - 80px)" }}>

          {/* ── LEFT COLUMN: Hero content ── */}
          <div className="col-lg-6 d-flex flex-column justify-content-center py-lg-5">
            <SlideUp>

              {/* Location badge */}
              <span
                className="badge text-uppercase fw-bold mb-4 px-3 py-2"
                style={{
                  background: "rgba(210, 175, 120,0.12)",
                  color: "#d2af78",
                  border: "1px solid rgba(210, 175, 120,0.3)",
                  letterSpacing: "0.1em",
                  fontSize: "0.65rem",
                  borderRadius: "50px",
                }}
              >
                🏠 Trusted Sober Living · League City &amp; Kemah, Texas
              </span>

              {/* Heading */}
              <h1
                className="fw-bold text-white mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  lineHeight: 1.1,
                }}
              >
                Your Recovery.<br />
                Your New Chapter.<br />
                <span className="text-warning">Starts Here.</span>
              </h1>

              {/* Subtitle */}
              <p
                className="mb-5"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                }}
              >
                Safe, structured, and supportive sober living environments where accountability, community, and long-term sobriety come together.
              </p>

              {/* Checklist */}
              <ul className="list-unstyled mb-5 d-flex flex-column gap-3">
                {[
                  "Safe, drug-free residential housing",
                  "Structured environments with 24/7 support",
                  "Peer-driven recovery communities",
                  "5 homes across League City & Kemah, TX",
                  "Seamless coordination with treatment centers",
                ].map((item) => (
                  <li key={item} className="d-flex align-items-center gap-3">
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(210, 175, 120,0.15)",
                        border: "1px solid rgba(210, 175, 120,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg fill="none" stroke="#d2af78" strokeWidth="2.5" viewBox="0 0 24 24" width="12" height="12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Star ratings */}
              <div
                className="d-flex align-items-center gap-3 mb-5 p-3 rounded-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "inline-flex", width: "fit-content" }}
              >
                <div className="d-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} fill="#d2af78" viewBox="0 0 24 24" width="18" height="18">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="fw-bold text-white" style={{ fontSize: "0.85rem" }}>5.0 · Trusted by families across Texas</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem" }}>Verified residents &amp; case managers</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a
                  href="tel:0017134099594"
                  className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow"
                  style={{ letterSpacing: "0.06em", fontSize: "0.85rem" }}
                  aria-label="Call Manageable Living 24/7"
                >
                  📞 Call Us 24/7
                </a>
                <a
                  href="/admissions/"
                  className="btn btn-outline-light rounded-pill px-5 py-3 fw-semibold text-uppercase"
                  style={{ letterSpacing: "0.06em", fontSize: "0.85rem", borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
                  aria-label="Learn more about admissions process"
                >
                  Learn More
                </a>
              </div>

              {/* Stat pills */}
              <div className="d-flex flex-wrap gap-3 mt-5">
                {[
                  { num: "5", label: "Homes" },
                  { num: "12+", label: "Years" },
                  { num: "24/7", label: "Support" },
                  { num: "100%", label: "Confidential" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center px-3 py-2 rounded-3"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", minWidth: "72px" }}
                  >
                    <div className="fw-bold text-warning" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "3px" }}>{s.label}</div>
                  </div>
                ))}
              </div>

            </SlideUp>
          </div>

          {/* ── RIGHT COLUMN: Admissions Form ── */}
          <div className="col-lg-6 py-lg-5">
            <FadeIn delay={0.25}>
              {/* Floating glow behind card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "400px",
                  height: "400px",
                  background: "radial-gradient(circle, rgba(210, 175, 120,0.08) 0%, transparent 70%)",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <AdmissionsForm />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
