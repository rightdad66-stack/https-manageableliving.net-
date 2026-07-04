import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cottage at Delasandri Sober Living | Manageable Living — Kemah, TX",
  description:
    "Tour the Cottage at Delasandri sober living home at 1010-B Delasandri Ln, Kemah TX. A beautifully upgraded women's cottage with granite kitchen island, spacious living areas, walk-in closet, and coastal charm — steps from the Kemah waterfront.",
};

const amenities = [
  { icon: "🛏️", label: "Bunk Bed Bedrooms" },
  { icon: "🍳", label: "Granite Kitchen Island" },
  { icon: "🛋️", label: "Open-Plan Living Room" },
  { icon: "🍽️", label: "Dining Area" },
  { icon: "🚿", label: "Two Full Bathrooms" },
  { icon: "👗", label: "Walk-In Closet & Laundry" },
  { icon: "📶", label: "High-Speed WiFi" },
  { icon: "🚗", label: "Private Driveway" },
  { icon: "👤", label: "On-Site House Manager" },
  { icon: "🚫", label: "Zero Drug & Alcohol Policy" },
  { icon: "🤝", label: "Weekly House Meetings" },
  { icon: "🌊", label: "Near Kemah Waterfront" },
];

const photos = [
  { src: "/cottage-pictures/1.png", alt: "Front exterior of the Cottage at Delasandri — turquoise cottage-style home with circular gable detail in Kemah TX", label: "Exterior" },
  { src: "/cottage-pictures/7.png",  alt: "Spacious open-plan living room with blue sectional sofa, TV and barn sliding door at Cottage at Delasandri", label: "Living Room" },
  { src: "/cottage-pictures/5.png",  alt: "Wide living area with ceiling fans, blue sofas and French door access at 1010-B Delasandri", label: "Open Living" },
  { src: "/cottage-pictures/6.png",  alt: "Stunning kitchen island with granite countertop, pendant lights and stainless range hood at Cottage Delasandri", label: "Kitchen" },
  { src: "/cottage-pictures/9.png",  alt: "Dining area with round table, coastal heron art and bright windows at Cottage at Delasandri Kemah", label: "Dining Area" },
  { src: "/cottage-pictures/8.png",  alt: "Furnished bunk bed bedroom with large windows at the Cottage at Delasandri sober living home", label: "Bedroom" },
  { src: "/cottage-pictures/3.png",  alt: "Walk-in closet with in-unit washer/dryer at Cottage at Delasandri women's sober living", label: "Closet & Laundry" },
  { src: "/cottage-pictures/4.png",  alt: "Clean full bathroom with dark wood vanity and mosaic tile at 1010-B Delasandri Ln", label: "Bathroom 1" },
  { src: "/cottage-pictures/2.png",  alt: "Second full bathroom with barn sliding door and wood vanity at Cottage Delasandri", label: "Bathroom 2" },
  { src: "/cottage-pictures/1.png",  alt: "Additional bathroom detail with patterned rug and white tile at Cottage at Delasandri", label: "Bathroom Detail" },
];

export default function CottageDelasandriPage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .cd-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          max-height: 860px;
          overflow: hidden;
        }
        .cd-hero-img { object-fit: cover; object-position: center 50%; }
        .cd-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            rgba(10,10,10,0.1) 0%,
            rgba(10,10,10,0.2) 35%,
            rgba(10,10,10,0.88) 100%);
        }
        .cd-hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 3rem 0 4rem;
        }

        /* ── Sidebar ── */
        .cd-sidebar { position: sticky; top: 90px; }
        .cd-cta-card {
          background: #111;
          border: 1px solid rgba(94,234,212,0.2);
          border-radius: 18px; overflow: hidden;
        }
        .cd-cta-header {
          background: linear-gradient(135deg, #0d1a18 0%, #111 100%);
          border-bottom: 1px solid rgba(94,234,212,0.12);
          padding: 1.5rem;
        }
        .cd-cta-body { padding: 1.5rem; }

        .cd-stat { text-align: center; padding: 1rem 0; border-right: 1px solid rgba(255,255,255,0.07); }
        .cd-stat:last-child { border-right: none; }
        .cd-stat-num { font-size: 1.6rem; font-weight: 700; color: #d2af78; line-height: 1; font-family: var(--font-heading); }
        .cd-stat-label { font-size: 0.62rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

        /* ── Gallery ── */
        .cd-gallery-hero {
          border-radius: 18px; overflow: hidden;
          aspect-ratio: 16/9; position: relative; cursor: pointer;
        }
        .cd-gallery-hero img { transition: transform 0.5s ease; }
        .cd-gallery-hero:hover img { transform: scale(1.03); }

        .cd-thumb {
          border-radius: 12px; overflow: hidden;
          aspect-ratio: 4/3; position: relative; cursor: pointer;
        }
        .cd-thumb img { transition: transform 0.4s ease; object-fit: cover; }
        .cd-thumb:hover img { transform: scale(1.05); }
        .cd-thumb-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.72));
          color: #fff; font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 1rem 0.75rem 0.5rem;
          opacity: 0; transition: opacity 0.3s;
        }
        .cd-thumb:hover .cd-thumb-label { opacity: 1; }

        /* ── Feature highlight strip ── */
        .cd-feature-strip {
          background: linear-gradient(135deg, #0d1a18 0%, #0f1f1c 100%);
          border-radius: 16px;
          border: 1px solid rgba(94,234,212,0.12);
          padding: 1.5rem;
        }
        .cd-feature-icon {
          width: 44px; height: 44px;
          background: rgba(94,234,212,0.1);
          border: 1px solid rgba(94,234,212,0.2);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; flex-shrink: 0;
        }

        /* ── Amenity pills ── */
        .cd-amenity {
          display: flex; align-items: center; gap: 0.6rem;
          background: \"var(--charcoal)\"; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 50px; padding: 0.55rem 1rem 0.55rem 0.75rem;
          font-size: 0.78rem; font-weight: 600; color: #333;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cd-amenity:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .cd-amenity-icon { font-size: 1.1rem; }

        /* ── Steps ── */
        .cd-step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #121212; color: #d2af78;
          font-size: 1.2rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-family: var(--font-heading);
        }

        /* ── Map ── */
        .cd-map-wrap { border-radius: 18px; overflow: hidden; height: 400px; box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .cd-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        /* ── Bottom CTA ── */
        .cd-bottom-cta {
          background: linear-gradient(135deg, #0a0f0e 0%, #0d1a18 100%);
          border-top: 1px solid rgba(94,234,212,0.12);
        }

        /* ── Breadcrumb ── */
        .cd-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .cd-breadcrumb a:hover { color: #d2af78; }
        .cd-breadcrumb span { color: rgba(255,255,255,0.35); margin: 0 0.5rem; font-size: 0.75rem; }

        .cd-teal { color: #5eead4; }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="cd-hero">
        <Image
          src="/cottage-pictures/1.png"
          alt="Front exterior of the Cottage at Delasandri — turquoise cottage home with circular gable window at 1010-B Delasandri Ln Kemah TX"
          fill priority
          className="cd-hero-img"
          sizes="100vw"
        />
        <div className="cd-hero-overlay" />
        <div className="cd-hero-content">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="cd-breadcrumb mb-3" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-homes/">Our Homes</Link>
              <span>/</span>
              <span style={{ color: "#d2af78", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cottage at Delasandri</span>
            </nav>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(210, 175, 120,0.15)", color: "#d2af78", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(210, 175, 120,0.3)" }}>
                ♀ Women's Home
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                📍 Kemah, TX
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                🏡 Private Cottage
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(94,234,212,0.12)", color: "#5eead4", fontSize: "0.7rem", letterSpacing: "0.08em", border: "1px solid rgba(94,234,212,0.2)" }}>
                ✨ Premium Upgraded
              </span>
            </div>

            <h1 className="text-white fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Cottage at Delasandri<br />
              <span className="text-warning">Sober Living Home</span>
            </h1>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              1010-B Delasandri Ln, Kemah, TX 77565
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
                  A Premium Cottage Experience for Women in Recovery
                </h2>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  The Cottage at Delasandri is our most boutique and upgraded women's residence — a charming turquoise cottage at 1010-B Delasandri Lane, set just behind our main Delasandri home in the peaceful coastal city of Kemah. Recognizable by its distinctive circular gable window and private driveway, this home feels like an escape.
                </p>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  Inside, the cottage dazzles with a stunning granite-top kitchen island with pendant lighting and a stainless range hood, a large open-plan tiled living area with barn-style sliding doors, two full bathrooms with dark wood vanities, a walk-in closet with in-unit laundry, bunk bed rooms with high ceilings, and a warm dining area adorned with coastal art.
                </p>
              </div>

              {/* Feature strip */}
              <div className="cd-feature-strip mb-5">
                <div className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#5eead4" }}>What Makes This Cottage Stand Out</div>
                <div className="row g-3">
                  {[
                    { icon: "🪨", title: "Granite Kitchen Island", desc: "Pendant-lit island with stainless range hood — a chef-quality kitchen shared by residents." },
                    { icon: "🚿", title: "Two Full Bathrooms", desc: "Dark mahogany vanities, mosaic tile, and barn sliding doors give a spa-like feel." },
                    { icon: "👗", title: "Walk-In Closet + Laundry", desc: "Private in-unit washer/dryer tucked inside a generous walk-in closet." },
                    { icon: "🏡", title: "Private Cottage Setting", desc: "Detached cottage feel with its own driveway, separate from the main residence." },
                  ].map((f) => (
                    <div className="col-sm-6" key={f.title}>
                      <div className="d-flex gap-3">
                        <div className="cd-feature-icon">{f.icon}</div>
                        <div>
                          <div className="fw-bold text-white mb-1" style={{ fontSize: "0.85rem" }}>{f.title}</div>
                          <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{f.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                  Explore the Cottage
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
                <h2 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>Delasandri Lane, Kemah</h2>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                  Set on the same street as our main Delasandri home, the cottage provides the same proximity to the Kemah waterfront, 12-step meetings, public transit, and coastal amenities — with the added privacy of its own detached setting and driveway.
                </p>
                <div className="cd-map-wrap">
                  <iframe
                    title="Manageable Living Cottage at Delasandri Sober Living Home Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.8!2d-95.0183!3d29.5405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f5e!2s1010%20Delasandri%20Ln%2C%20Kemah%2C%20TX%2077565!5e0!3m2!1sen!2sus!4v1700000000006!5m2!1sen!2sus"
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
                    { step: "4", title: "Move In & Begin", desc: "You'll be welcomed by your house manager and community. We'll walk you through the home and help you settle in comfortably." },
                  ].map((s) => (
                    <div key={s.step} className="d-flex gap-4 align-items-start">
                      <div className="cd-step-num flex-shrink-0">{s.step}</div>
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
              <div className="cd-sidebar">
                <div className="cd-cta-card shadow-lg">
                  <div className="cd-cta-header">
                    <div className="fw-bold text-uppercase mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#5eead4" }}>Cottage at Delasandri • Women's</div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)" }}>1010-B Delasandri Lane</div>
                    <div className="text-secondary" style={{ fontSize: "0.8rem" }}>Kemah, TX 77565</div>
                  </div>

                  {/* Stats bar */}
                  <div className="d-flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="cd-stat flex-fill">
                      <div className="cd-stat-num">12+</div>
                      <div className="cd-stat-label">Yrs Operating</div>
                    </div>
                    <div className="cd-stat flex-fill">
                      <div className="cd-stat-num">24/7</div>
                      <div className="cd-stat-label">Support</div>
                    </div>
                    <div className="cd-stat flex-fill">
                      <div className="cd-stat-num">0</div>
                      <div className="cd-stat-label">Tolerance</div>
                    </div>
                  </div>

                  <div className="cd-cta-body">
                    <div className="d-flex flex-column gap-2 mb-4">
                      {["Beds Available Now", "Premium Upgraded Interiors", "In-Unit Washer & Dryer", "Near Kemah Waterfront"].map((f) => (
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

                {/* Kitchen island thumbnail */}
                <div className="mt-3 rounded-4 overflow-hidden shadow position-relative" style={{ height: "180px" }}>
                  <Image
                    src="/cottage-pictures/6.png"
                    alt="Granite kitchen island at Cottage at Delasandri Kemah TX"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 45%" }}
                    sizes="350px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Kemah, TX
                  </div>
                </div>

                {/* Other women's homes */}
                <div className="mt-3 p-3 rounded-4 bg-charcoal shadow-sm">
                  <div className="fw-bold mb-2" style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.06em", textTransform: "uppercase" }}>Other Women's Homes</div>
                  <div className="d-flex flex-column gap-2">
                    {[
                      { href: "/our-homes/delasandri/", badge: "Home 3", label: "Delasandri Lane — Kemah" },
                      { href: "/our-homes/sue-drive/", badge: "Home 4", label: "Sue Drive — Kemah" },
                    ].map((h) => (
                      <Link key={h.href} href={h.href} className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: "#333" }}>
                        <span style={{ background: "#d2af78", color: "#000", fontSize: "0.6rem", fontWeight: 700, borderRadius: "4px", padding: "2px 6px" }}>{h.badge}</span>
                        <span style={{ fontSize: "0.8rem" }}>{h.label}</span>
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14" className="ms-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </Link>
                    ))}
                  </div>
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
      <section className="cd-bottom-cta text-light py-5 text-center">
        <div className="container py-lg-4">
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", fontSize: "0.65rem", letterSpacing: "0.18em", border: "1px solid rgba(210, 175, 120,0.2)" }}>
            Beds Available Now
          </span>
          <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
            Ready to Move Into<br />the Cottage at Delasandri?
          </h2>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: "600px", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our admissions coordinators are available 24/7 to answer your questions and help you reserve a bed at our most upgraded Kemah residence.
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
