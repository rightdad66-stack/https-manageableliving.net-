import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idaho Drive Sober Living Home | Manageable Living — League City, TX",
  description:
    "Tour our modern Idaho Drive sober living residence at 2003 Idaho Drive, League City TX. Open-plan kitchen, bright bedrooms, and a supportive men's recovery community in the heart of League City.",
};

const amenities = [
  { icon: "🛏️", label: "Private & Shared Bedrooms" },
  { icon: "🍳", label: "Modern Kitchen Island" },
  { icon: "🛋️", label: "Open-Plan Living Area" },
  { icon: "🍽️", label: "Dining Room" },
  { icon: "📶", label: "High-Speed WiFi" },
  { icon: "🧺", label: "In-House Laundry" },
  { icon: "🚗", label: "Parking Available" },
  { icon: "👤", label: "On-Site House Manager" },
  { icon: "🚫", label: "Zero Drug & Alcohol Policy" },
  { icon: "🤝", label: "Weekly House Meetings" },
];

const photos = [
  { src: "/idaho-drive-pictures/7.png",  alt: "Modern kitchen with island, bar stools and range hood at Idaho Drive sober living League City TX", label: "Kitchen" },
  { src: "/idaho-drive-pictures/9.png",  alt: "Bright communal living room with navy sofas and wall-mounted TV at 2003 Idaho Drive", label: "Living Room" },
  { src: "/idaho-drive-pictures/4.png",  alt: "Open-plan view from kitchen island into the living room at Idaho Drive", label: "Open Plan" },
  { src: "/idaho-drive-pictures/6.png",  alt: "Full interior view showing kitchen, fridge and open layout at Idaho Drive men's sober living", label: "Interior" },
  { src: "/idaho-drive-pictures/5.png",  alt: "Dining area with dark round table and chairs at 2003 Idaho Drive League City", label: "Dining Area" },
  { src: "/idaho-drive-pictures/2.png",  alt: "Furnished shared bedroom with dark wardrobes and hardwood floors at Idaho Drive", label: "Bedroom 1" },
  { src: "/idaho-drive-pictures/11.png", alt: "Clean bright bedroom with single beds and natural light at Idaho Drive sober living", label: "Bedroom 2" },
  { src: "/idaho-drive-pictures/1.png",  alt: "Second bedroom with two beds and hardwood floors at 2003 Idaho Drive", label: "Bedroom 3" },
  { src: "/idaho-drive-pictures/3.png",  alt: "Minimalist bedroom with twin beds and large windows at Idaho Drive", label: "Bedroom 4" },
  { src: "/idaho-drive-pictures/8.png",  alt: "Additional room and interior detail at 2003 Idaho Drive League City TX", label: "Interior" },
  { src: "/idaho-drive-pictures/10.png", alt: "Hallway and common area at Idaho Drive men's sober living home", label: "Common Area" },
];

export default function IdahoDrivePage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .id-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          max-height: 860px;
          overflow: hidden;
        }
        .id-hero-img { object-fit: cover; object-position: center 40%; }
        .id-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            rgba(10,10,10,0.15) 0%,
            rgba(10,10,10,0.28) 40%,
            rgba(10,10,10,0.88) 100%);
        }
        .id-hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 3rem 0 4rem;
        }

        /* ── Sidebar ── */
        .id-sidebar { position: sticky; top: 90px; }
        .id-cta-card {
          background: #111;
          border: 1px solid rgba(210, 175, 120,0.2);
          border-radius: 18px; overflow: hidden;
        }
        .id-cta-header {
          background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
          border-bottom: 1px solid rgba(210, 175, 120,0.15);
          padding: 1.5rem;
        }
        .id-cta-body { padding: 1.5rem; }

        .id-stat { text-align: center; padding: 1rem 0; border-right: 1px solid rgba(255,255,255,0.07); }
        .id-stat:last-child { border-right: none; }
        .id-stat-num { font-size: 1.6rem; font-weight: 700; color: #d2af78; line-height: 1; font-family: var(--font-heading); }
        .id-stat-label { font-size: 0.62rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

        /* ── Gallery ── */
        .id-gallery-hero {
          border-radius: 18px; overflow: hidden;
          aspect-ratio: 16/9; position: relative; cursor: pointer;
        }
        .id-gallery-hero img { transition: transform 0.5s ease; }
        .id-gallery-hero:hover img { transform: scale(1.03); }

        .id-thumb {
          border-radius: 12px; overflow: hidden;
          aspect-ratio: 4/3; position: relative; cursor: pointer;
        }
        .id-thumb img { transition: transform 0.4s ease; object-fit: cover; }
        .id-thumb:hover img { transform: scale(1.05); }
        .id-thumb-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: #fff; font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 1rem 0.75rem 0.5rem;
          opacity: 0; transition: opacity 0.3s;
        }
        .id-thumb:hover .id-thumb-label { opacity: 1; }

        /* ── Amenity pills ── */
        .id-amenity {
          display: flex; align-items: center; gap: 0.6rem;
          background: \"var(--charcoal)\"; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 50px; padding: 0.55rem 1rem 0.55rem 0.75rem;
          font-size: 0.78rem; font-weight: 600; color: #333;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .id-amenity:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .id-amenity-icon { font-size: 1.1rem; }

        /* ── Steps ── */
        .id-step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #121212; color: #d2af78;
          font-size: 1.2rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-family: var(--font-heading);
        }

        /* ── Map ── */
        .id-map-wrap { border-radius: 18px; overflow: hidden; height: 400px; box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .id-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        /* ── Bottom CTA ── */
        .id-bottom-cta {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a1208 100%);
          border-top: 1px solid rgba(210, 175, 120,0.15);
        }

        /* ── Breadcrumb ── */
        .id-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .id-breadcrumb a:hover { color: #d2af78; }
        .id-breadcrumb span { color: rgba(255,255,255,0.35); margin: 0 0.5rem; font-size: 0.75rem; }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="id-hero">
        <Image
          src="/idaho-drive-pictures/7.png"
          alt="Modern kitchen with island and bar stools at Idaho Drive sober living home in League City TX"
          fill priority
          className="id-hero-img"
          sizes="100vw"
        />
        <div className="id-hero-overlay" />
        <div className="id-hero-content">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="id-breadcrumb mb-3" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-homes/">Our Homes</Link>
              <span>/</span>
              <span style={{ color: "#d2af78", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Idaho Drive</span>
            </nav>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(210, 175, 120,0.15)", color: "#d2af78", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(210, 175, 120,0.3)" }}>
                ♂ Men's Home
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                📍 League City, TX
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                🏡 Modern Open-Plan
              </span>
            </div>

            <h1 className="text-white fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Idaho Drive<br />
              <span className="text-warning">Sober Living Home</span>
            </h1>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              2003 Idaho Drive, League City, TX 77573
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
                  Modern Living for Focused Recovery
                </h2>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  The Idaho Drive home is a beautifully renovated, modern open-plan ranch residence in League City, Texas — offering men in recovery a clean, bright, and structured environment to rebuild their lives. Fresh white walls, hardwood floors throughout, and a stunning kitchen island with bar stools set this home apart.
                </p>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  The open layout flows seamlessly from the gourmet kitchen into a comfortable living area with navy sofas and a wall-mounted TV. Multiple bright bedrooms, an in-house dining room, and laundry facilities complete a home designed entirely around comfort and accountability in recovery.
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
                <h2 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>Idaho Drive, League City</h2>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                  Situated in a quiet residential neighborhood in League City, TX — with easy access to local shopping centers, public transit, 12-step meeting locations, employment centers, and major highways. An ideal base for men rebuilding structure and purpose.
                </p>
                <div className="id-map-wrap">
                  <iframe
                    title="Manageable Living Idaho Drive Sober Living Home Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.6!2d-95.0910!3d29.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f62!2s2003%20Idaho%20Dr%2C%20League%20City%2C%20TX%2077573!5e0!3m2!1sen!2sus!4v1700000000005!5m2!1sen!2sus"
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
                      <div className="id-step-num flex-shrink-0">{s.step}</div>
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
              <div className="id-sidebar">
                <div className="id-cta-card shadow-lg">
                  <div className="id-cta-header">
                    <div className="text-warning fw-bold text-uppercase mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.18em" }}>Idaho Drive • Men's Home</div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)" }}>2003 Idaho Drive</div>
                    <div className="text-secondary" style={{ fontSize: "0.8rem" }}>League City, TX 77573</div>
                  </div>

                  {/* Stats bar */}
                  <div className="d-flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="id-stat flex-fill">
                      <div className="id-stat-num">12+</div>
                      <div className="id-stat-label">Yrs Operating</div>
                    </div>
                    <div className="id-stat flex-fill">
                      <div className="id-stat-num">24/7</div>
                      <div className="id-stat-label">Support</div>
                    </div>
                    <div className="id-stat flex-fill">
                      <div className="id-stat-num">0</div>
                      <div className="id-stat-label">Tolerance</div>
                    </div>
                  </div>

                  <div className="id-cta-body">
                    <div className="d-flex flex-column gap-2 mb-4">
                      {["Beds Available Now", "Fully Furnished", "All Utilities Included", "Modern Renovated Interior"].map((f) => (
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

                {/* Kitchen showcase thumbnail */}
                <div className="mt-3 rounded-4 overflow-hidden shadow position-relative" style={{ height: "180px" }}>
                  <Image
                    src="/idaho-drive-pictures/6.png"
                    alt="Open-plan interior at Idaho Drive League City"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 45%" }}
                    sizes="350px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    League City, TX
                  </div>
                </div>

                {/* Other men's home */}
                <div className="mt-3 p-3 rounded-4 bg-charcoal shadow-sm">
                  <div className="fw-bold mb-2" style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.06em", textTransform: "uppercase" }}>Other Men's Home</div>
                  <Link href="/our-homes/vantage-pointe/" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: "#333" }}>
                    <span style={{ background: "#d2af78", color: "#000", fontSize: "0.6rem", fontWeight: 700, borderRadius: "4px", padding: "2px 6px" }}>Home 2</span>
                    <span style={{ fontSize: "0.8rem" }}>Vantage Pointe — League City</span>
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14" className="ms-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile pinned CTA */}
      <div className="d-lg-none position-fixed bottom-0 start-0 end-0 p-3 d-flex gap-2" style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid rgba(210, 175, 120,0.2)", zIndex: 1000, backdropFilter: "blur(12px)" }}>
        <Link href="/admissions/" className="btn btn-warning fw-bold text-uppercase rounded-pill flex-fill py-3" style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}>
          Apply Now
        </Link>
        <a href="tel:0017134099594" className="btn btn-outline-light rounded-pill px-4 py-3" style={{ fontSize: "0.78rem" }}>
          📞 Call
        </a>
      </div>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="id-bottom-cta text-light py-5 text-center">
        <div className="container py-lg-4">
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", fontSize: "0.65rem", letterSpacing: "0.18em", border: "1px solid rgba(210, 175, 120,0.2)" }}>
            Beds Available Now
          </span>
          <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
            Ready to Make Idaho Drive<br />Your Sober Home?
          </h2>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: "600px", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our admissions coordinators are available 24/7 to answer your questions and help you reserve a bed at our modern League City residence.
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
