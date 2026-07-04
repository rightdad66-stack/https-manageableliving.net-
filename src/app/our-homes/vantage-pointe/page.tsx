import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vantage Pointe Sober Living Home | Manageable Living — League City, TX",
  description:
    "Tour our beautiful Vantage Pointe sober living residence at 315 Vantage Pointe Circle, League City TX. Spacious rooms, modern amenities, and a supportive recovery community.",
};

const amenities = [
  { icon: "🛏️", label: "Fully Furnished Bedrooms" },
  { icon: "🍽️", label: "Full Kitchen & Dining" },
  { icon: "📶", label: "High-Speed WiFi" },
  { icon: "🧺", label: "In-House Laundry" },
  { icon: "🚗", label: "Parking Available" },
  { icon: "👤", label: "On-Site House Manager" },
  { icon: "🚫", label: "Zero Drug & Alcohol Policy" },
  { icon: "🤝", label: "Weekly House Meetings" },
];

const photos = [
  { src: "/vantage-pictures/1.png", alt: "Exterior front view of Vantage Pointe sober living home — 315 Vantage Pointe Circle, League City TX", label: "Exterior" },
  { src: "/vantage-pictures/2.png", alt: "Street view and surrounding neighborhood of Vantage Pointe residence", label: "Neighborhood" },
  { src: "/vantage-pictures/3.png", alt: "Back of property showing additional exterior features", label: "Exterior Side" },
  { src: "/vantage-pictures/4.png", alt: "Grand foyer and staircase inside Vantage Pointe home", label: "Foyer & Entry" },
  { src: "/vantage-pictures/5.png", alt: "Furnished bedroom at Vantage Pointe with multiple beds and natural light", label: "Bedroom" },
  { src: "/vantage-pictures/6.png", alt: "Second furnished bedroom with comfortable beds and bright windows", label: "Bedroom 2" },
  { src: "/vantage-pictures/7.png", alt: "Clean bathroom with modern fixtures at Vantage Pointe", label: "Bathroom" },
  { src: "/vantage-pictures/8.png", alt: "Additional interior space at Vantage Pointe", label: "Interior" },
  { src: "/vantage-pictures/9.png", alt: "Living area and communal space", label: "Living Area" },
  { src: "/vantage-pictures/10.png", alt: "Dining area with table and in-house laundry at Vantage Pointe", label: "Dining & Laundry" },
];

export default function VantagePointePage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .vp-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          max-height: 860px;
          overflow: hidden;
        }
        .vp-hero-img {
          object-fit: cover;
          object-position: center 30%;
        }
        .vp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(10,10,10,0.18) 0%,
            rgba(10,10,10,0.28) 40%,
            rgba(10,10,10,0.82) 100%);
        }
        .vp-hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 0 4rem;
        }

        /* ── Sticky sidebar ── */
        .vp-sidebar {
          position: sticky;
          top: 90px;
        }
        .vp-cta-card {
          background: #111;
          border: 1px solid rgba(210, 175, 120,0.2);
          border-radius: 18px;
          overflow: hidden;
        }
        .vp-cta-header {
          background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
          border-bottom: 1px solid rgba(210, 175, 120,0.15);
          padding: 1.5rem;
        }
        .vp-cta-body { padding: 1.5rem; }
        .vp-stat {
          text-align: center;
          padding: 1rem 0;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .vp-stat:last-child { border-right: none; }
        .vp-stat-num {
          font-size: 1.6rem;
          font-weight: 700;
          color: #d2af78;
          line-height: 1;
          font-family: var(--font-heading);
        }
        .vp-stat-label {
          font-size: 0.62rem;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        /* ── Gallery ── */
        .vp-gallery-hero {
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 16/9;
          position: relative;
          cursor: pointer;
        }
        .vp-gallery-hero img { transition: transform 0.5s ease; }
        .vp-gallery-hero:hover img { transform: scale(1.03); }

        .vp-thumb {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;
          cursor: pointer;
        }
        .vp-thumb img { transition: transform 0.4s ease; object-fit: cover; }
        .vp-thumb:hover img { transform: scale(1.05); }

        .vp-thumb-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.65));
          color: #fff;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 0.75rem 0.5rem;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .vp-thumb:hover .vp-thumb-label { opacity: 1; }

        /* ── Amenity pills ── */
        .vp-amenity {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: \"var(--charcoal)\";
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 50px;
          padding: 0.55rem 1rem 0.55rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #333;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .vp-amenity:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .vp-amenity-icon { font-size: 1.1rem; }

        /* ── Steps ── */
        .vp-step-num {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #121212;
          color: #d2af78;
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-heading);
        }

        /* ── Map ── */
        .vp-map-wrap {
          border-radius: 18px;
          overflow: hidden;
          height: 400px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .vp-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        /* ── Bottom CTA ── */
        .vp-bottom-cta {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a1208 100%);
          border-top: 1px solid rgba(210, 175, 120,0.15);
        }

        /* ── Breadcrumb badge ── */
        .vp-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .vp-breadcrumb a:hover { color: #d2af78; }
        .vp-breadcrumb span { color: rgba(255,255,255,0.35); margin: 0 0.5rem; font-size: 0.75rem; }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="vp-hero">
        <Image
          src="/vantage-pictures/1.png"
          alt="Front exterior of Vantage Pointe sober living home in League City Texas"
          fill
          priority
          className="vp-hero-img"
          sizes="100vw"
        />
        <div className="vp-hero-overlay" />
        <div className="vp-hero-content">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="vp-breadcrumb mb-3" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-homes/">Our Homes</Link>
              <span>/</span>
              <span style={{ color: "#d2af78", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Vantage Pointe</span>
            </nav>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(210, 175, 120,0.15)", color: "#d2af78", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(210, 175, 120,0.3)" }}>
                ♂ Men's Home
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                📍 League City, TX
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                🏡 Premier Residence
              </span>
            </div>

            <h1 className="text-white fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Vantage Pointe<br />
              <span className="text-warning">Sober Living Home</span>
            </h1>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              315 Vantage Pointe Circle, League City, TX 77573
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAIN CONTENT + SIDEBAR ═══════════════ */}
      <section className="py-5 bg-black">
        <div className="container py-lg-3">
          <div className="row g-5 align-items-start">

            {/* LEFT: Main Content */}
            <div className="col-lg-8">

              {/* About */}
              <div className="mb-5">
                <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>About This Home</span>
                <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  An Inspiring Environment for Lasting Sobriety
                </h2>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  Situated in the beautiful Vantage Pointe community of League City, this stunning brick colonial residence provides a highly structured, fully furnished, and supportive sober living environment tailored for men committed to long-term recovery.
                </p>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  The home features a grand foyer, spacious bedrooms, a full kitchen and dining area, and in-house laundry — all within a quiet, walkable neighborhood close to 12-step meetings, job centers, and community parks.
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-5">
                <span className="badge text-uppercase mb-4 px-3 py-2 rounded-pill" style={{ color: "#d2af78", background: "rgba(210, 175, 120, 0.05)", border: "1px solid rgba(210, 175, 120, 0.1)", fontSize: "0.65rem", letterSpacing: "0.15em" }}>Amenities & House Rules</span>
                <div className="row g-4">
                  {amenities.map((a) => (
                    <div key={a.label} className="col-12 col-sm-6 col-md-4 d-flex align-items-center gap-3">
                      <span style={{ fontSize: "1.4rem" }}>{a.icon}</span>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", fontWeight: 600 }}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>Photo Tour</span>
                <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>
                  Explore the Residence
                </h2>

                {/* Masonry Gallery */}
                <div className="masonry-grid pt-2">
                  {photos.map((p, i) => (
                    <div className="masonry-item" key={p.src}>
                      <div className="masonry-img-wrapper position-relative w-100 rounded-3 overflow-hidden shadow-sm" style={{ border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={800}
                          height={600}
                          style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                          sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                        />
                        <div style={{ padding: "10px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", position: "absolute", bottom: 0, left: 0, right: 0, color: "#fff", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", pointerEvents: "none" }}>
                          {p.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location + Map */}
              <div className="mb-5">
                <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>Location</span>
                <h2 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>Vantage Pointe, League City</h2>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                  Located in a highly sought-after, quiet residential loop in League City — exceptional walkability, peace, and quick access to local shopping, public transit, and 12-step meeting locations.
                </p>
                <div className="vp-map-wrap">
                  <iframe
                    title="Manageable Living Vantage Pointe Sober Living Home Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.5188849764835!2d-95.08312018489665!3d29.51582298207757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f62c0b050d2bb%3A0x7d2cb9101d24c0d1!2s315%20Vantage%20Pointe%20Cir%2C%20League%20City%2C%20TX%2077573!5e0!3m2!1sen!2sus!4v1700000000002!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Steps */}
              <div>
                <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>How It Works</span>
                <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>4 Steps to Move In</h2>
                <div className="d-flex flex-column gap-4">
                  {[
                    { step: "1", title: "Call or Apply Online", desc: "Reach out to our team 24/7 by phone, text, or our online form. We respond within 1 hour during business hours." },
                    { step: "2", title: "Free Assessment", desc: "A compassionate phone call with our intake coordinator helps us understand your situation and match you with the right home." },
                    { step: "3", title: "Home Placement", desc: "We place you in the best-fit home based on your needs and goals. You'll review our House Agreement before committing." },
                    { step: "4", title: "Move In & Begin", desc: "You'll be welcomed by your house manager and community. We walk you through the home and help you settle in comfortably." },
                  ].map((s) => (
                    <div key={s.step} className="d-flex gap-4 align-items-start">
                      <div className="vp-step-num flex-shrink-0">{s.step}</div>
                      <div>
                        <div className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{s.title}</div>
                        <div className="text-secondary" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: Sticky Sidebar */}
            <div className="col-lg-4 d-none d-lg-block">
              <div className="vp-sidebar">
                <div className="vp-cta-card shadow-lg">
                  <div className="vp-cta-header">
                    <div className="text-warning fw-bold text-uppercase mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.18em" }}>Vantage Pointe • Men's Home</div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)" }}>315 Vantage Pointe Circle</div>
                    <div className="text-secondary" style={{ fontSize: "0.8rem" }}>League City, TX 77573</div>
                  </div>

                  {/* Stats bar */}
                  <div className="d-flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="vp-stat flex-fill">
                      <div className="vp-stat-num">12+</div>
                      <div className="vp-stat-label">Yrs Operating</div>
                    </div>
                    <div className="vp-stat flex-fill">
                      <div className="vp-stat-num">24/7</div>
                      <div className="vp-stat-label">Support</div>
                    </div>
                    <div className="vp-stat flex-fill">
                      <div className="vp-stat-num">0</div>
                      <div className="vp-stat-label">Tolerance</div>
                    </div>
                  </div>

                  <div className="vp-cta-body">
                    <div className="d-flex flex-column gap-2 mb-4">
                      {["Beds Available Now", "Fully Furnished", "All Utilities Included", "High-Speed WiFi Included"].map((f) => (
                        <div key={f} className="d-flex align-items-center gap-2">
                          <svg fill="none" stroke="#d2af78" strokeWidth="2.5" viewBox="0 0 24 24" width="15" height="15"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/admissions/"
                      className="btn btn-warning w-100 fw-bold text-uppercase rounded-pill py-3 mb-2"
                      style={{ letterSpacing: "0.08em", fontSize: "0.82rem" }}
                    >
                      Apply for This Home
                    </Link>
                    <a
                      href="tel:0017134099594"
                      className="btn btn-outline-secondary w-100 fw-semibold rounded-pill py-2"
                      style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      📞 (713) 409-9594
                    </a>

                    <hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "1.25rem 0" }} />

                    <div className="text-center" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
                      All inquiries are 100% confidential
                    </div>
                  </div>
                </div>

                {/* Exterior thumbnail card */}
                <div className="mt-3 rounded-4 overflow-hidden shadow position-relative" style={{ height: "180px" }}>
                  <Image
                    src="/vantage-pictures/2.png"
                    alt="Street view of Vantage Pointe home"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 40%" }}
                    sizes="350px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Neighborhood View
                  </div>
                </div>

                {/* Other homes */}
                <div className="mt-3 p-3 rounded-4 bg-charcoal shadow-sm">
                  <div className="fw-bold mb-2" style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.06em", textTransform: "uppercase" }}>Other Men's Home</div>
                  <Link href="/our-homes/idaho-drive/" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: "#333" }}>
                    <span style={{ background: "#d2af78", color: "#000", fontSize: "0.6rem", fontWeight: 700, borderRadius: "4px", padding: "2px 6px" }}>Home 1</span>
                    <span style={{ fontSize: "0.8rem" }}>Idaho Drive — League City</span>
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14" className="ms-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile CTA bar (pinned bottom on mobile) */}
      <div className="d-lg-none position-fixed bottom-0 start-0 end-0 p-3 d-flex gap-2" style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid rgba(210, 175, 120,0.2)", zIndex: 1000, backdropFilter: "blur(12px)" }}>
        <Link href="/admissions/" className="btn btn-warning fw-bold text-uppercase rounded-pill flex-fill py-3" style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}>
          Apply Now
        </Link>
        <a href="tel:0017134099594" className="btn btn-outline-light rounded-pill px-4 py-3" style={{ fontSize: "0.78rem" }}>
          📞 Call
        </a>
      </div>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="vp-bottom-cta text-light py-5 text-center">
        <div className="container py-lg-4">
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", fontSize: "0.65rem", letterSpacing: "0.18em", border: "1px solid rgba(210, 175, 120,0.2)" }}>
            Beds Available Now
          </span>
          <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
            Ready to Make Vantage Pointe<br />Your Sober Home?
          </h2>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: "600px", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our admissions coordinators are available 24/7 to answer your questions and help you reserve a bed at our League City residence.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link href="/admissions/" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" style={{ letterSpacing: "0.08em" }}>
              Apply Online
            </Link>
            <a href="tel:0017134099594" className="btn btn-outline-light rounded-pill px-5 py-3 fw-semibold text-uppercase" style={{ letterSpacing: "0.08em" }}>
              Call Us 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
