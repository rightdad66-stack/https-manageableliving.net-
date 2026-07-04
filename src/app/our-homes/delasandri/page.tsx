import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delasandri Lane Sober Living Home | Manageable Living — Kemah, TX",
  description:
    "Tour our peaceful Delasandri Lane sober living residence at 1010 Delasandri Ln, Kemah TX. Spacious rooms, communal living, and a serene coastal recovery community just minutes from the Kemah waterfront.",
};

const amenities = [
  { icon: "🛏️", label: "Bunk & Private Bedrooms" },
  { icon: "🍽️", label: "Full Kitchen & Dining" },
  { icon: "🛋️", label: "Communal Living Room" },
  { icon: "📶", label: "High-Speed WiFi" },
  { icon: "🧺", label: "In-House Laundry" },
  { icon: "🌳", label: "Large Front Lawn" },
  { icon: "👤", label: "On-Site House Manager" },
  { icon: "🚫", label: "Zero Drug & Alcohol Policy" },
  { icon: "🤝", label: "Weekly House Meetings" },
  { icon: "🌊", label: "Near Kemah Waterfront" },
];

const photos = [
  { src: "/delasandri-pictures/11.png", alt: "Front exterior of Delasandri Lane sober living home — wide turquoise ranch-style with manicured lawn in Kemah TX", label: "Exterior" },
  { src: "/delasandri-pictures/9.png",  alt: "Scenic front yard with mature tree and swing at 1010 Delasandri Lane", label: "Front Yard" },
  { src: "/delasandri-pictures/8.png",  alt: "Spacious communal living room with vaulted beamed ceiling, fireplace and large TV", label: "Living Room" },
  { src: "/delasandri-pictures/5.png",  alt: "Full kitchen and dining area with stone column accents at Delasandri Lane home", label: "Kitchen & Dining" },
  { src: "/delasandri-pictures/3.png",  alt: "Community study and meeting room with tables and bookshelves at Delasandri", label: "Study Room" },
  { src: "/delasandri-pictures/1.png",  alt: "Furnished bunk bed bedroom at Delasandri Lane sober living Kemah TX", label: "Bedroom 1" },
  { src: "/delasandri-pictures/2.png",  alt: "Second bedroom with bunk beds and patio access at Delasandri Lane", label: "Bedroom 2" },
  { src: "/delasandri-pictures/4.png",  alt: "Additional bedroom interior at Delasandri Lane", label: "Bedroom 3" },
  { src: "/delasandri-pictures/6.png",  alt: "Interior hallway and common area at Delasandri Lane", label: "Interior" },
  { src: "/delasandri-pictures/7.png",  alt: "Another interior view at Delasandri Lane", label: "Common Area" },
  { src: "/delasandri-pictures/10.png", alt: "Additional amenity space at Delasandri Lane sober living", label: "Amenities" },
];

export default function DelasandriPage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .dl-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          max-height: 860px;
          overflow: hidden;
        }
        .dl-hero-img { object-fit: cover; object-position: center 60%; }
        .dl-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            rgba(10,10,10,0.2) 0%,
            rgba(10,10,10,0.3) 40%,
            rgba(10,10,10,0.85) 100%);
        }
        .dl-hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 3rem 0 4rem;
        }

        /* ── Sidebar ── */
        .dl-sidebar { position: sticky; top: 90px; }
        .dl-cta-card {
          background: #111;
          border: 1px solid rgba(20,184,166,0.25);
          border-radius: 18px; overflow: hidden;
        }
        .dl-cta-header {
          background: linear-gradient(135deg, #0d1a18 0%, #111 100%);
          border-bottom: 1px solid rgba(20,184,166,0.15);
          padding: 1.5rem;
        }
        .dl-cta-body { padding: 1.5rem; }

        .dl-stat { text-align: center; padding: 1rem 0; border-right: 1px solid rgba(255,255,255,0.07); }
        .dl-stat:last-child { border-right: none; }
        .dl-stat-num { font-size: 1.6rem; font-weight: 700; color: #d2af78; line-height: 1; font-family: var(--font-heading); }
        .dl-stat-label { font-size: 0.62rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

        /* ── Gallery ── */
        .dl-gallery-hero {
          border-radius: 18px; overflow: hidden;
          aspect-ratio: 16/9; position: relative; cursor: pointer;
        }
        .dl-gallery-hero img { transition: transform 0.5s ease; }
        .dl-gallery-hero:hover img { transform: scale(1.03); }

        .dl-thumb {
          border-radius: 12px; overflow: hidden;
          aspect-ratio: 4/3; position: relative; cursor: pointer;
        }
        .dl-thumb img { transition: transform 0.4s ease; object-fit: cover; }
        .dl-thumb:hover img { transform: scale(1.05); }
        .dl-thumb-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: #fff; font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 1rem 0.75rem 0.5rem;
          opacity: 0; transition: opacity 0.3s;
        }
        .dl-thumb:hover .dl-thumb-label { opacity: 1; }

        /* ── Amenity pills ── */
        .dl-amenity {
          display: flex; align-items: center; gap: 0.6rem;
          background: \"var(--charcoal)\"; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 50px; padding: 0.55rem 1rem 0.55rem 0.75rem;
          font-size: 0.78rem; font-weight: 600; color: #333;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .dl-amenity:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .dl-amenity-icon { font-size: 1.1rem; }

        /* ── Steps ── */
        .dl-step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: #121212; color: #d2af78;
          font-size: 1.2rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-family: var(--font-heading);
        }

        /* ── Map ── */
        .dl-map-wrap { border-radius: 18px; overflow: hidden; height: 400px; box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .dl-map-wrap iframe { width: 100%; height: 100%; border: 0; }

        /* ── Bottom CTA ── */
        .dl-bottom-cta {
          background: linear-gradient(135deg, #0a0f0e 0%, #0d1a18 100%);
          border-top: 1px solid rgba(20,184,166,0.15);
        }

        /* ── Breadcrumb ── */
        .dl-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .dl-breadcrumb a:hover { color: #d2af78; }
        .dl-breadcrumb span { color: rgba(255,255,255,0.35); margin: 0 0.5rem; font-size: 0.75rem; }

        /* teal accent override for this page */
        .dl-accent { color: #5eead4; }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="dl-hero">
        <Image
          src="/delasandri-pictures/11.png"
          alt="Front exterior of Delasandri Lane sober living home in Kemah Texas — turquoise ranch-style with large front lawn"
          fill priority
          className="dl-hero-img"
          sizes="100vw"
        />
        <div className="dl-hero-overlay" />
        <div className="dl-hero-content">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="dl-breadcrumb mb-3" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-homes/">Our Homes</Link>
              <span>/</span>
              <span style={{ color: "#d2af78", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Delasandri Lane</span>
            </nav>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(210, 175, 120,0.15)", color: "#d2af78", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(210, 175, 120,0.3)" }}>
                ♀ Women's Home
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                📍 Kemah, TX
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                🌊 Waterfront Proximity
              </span>
            </div>

            <h1 className="text-white fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Delasandri Lane<br />
              <span className="text-warning">Sober Living Home</span>
            </h1>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              1010 Delasandri Ln, Kemah, TX 77565
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
                  A Serene Coastal Environment for Recovery
                </h2>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  Located in the beautiful coastal community of Kemah, Texas, the Delasandri Lane home is a charming turquoise ranch-style residence set on a large, tree-lined lot — just minutes from the Kemah waterfront. The home's inviting exterior, complete with a front-yard tree swing, creates an immediate sense of calm and belonging.
                </p>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  Inside, residents enjoy spacious communal spaces including a vaulted-ceiling living room with fireplace, a full kitchen and stone-column dining area, a dedicated study and meeting room, and multiple furnished bedrooms — all designed to foster accountability, community, and lasting recovery.
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
                <h2 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}>Delasandri Lane, Kemah</h2>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                  Nestled in the peaceful coastal city of Kemah, this home offers quick access to the waterfront, local shopping, 12-step meeting locations, and public transit — all within a quiet, tree-lined residential setting ideal for focused recovery.
                </p>
                <div className="dl-map-wrap">
                  <iframe
                    title="Manageable Living Delasandri Lane Sober Living Home Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.8!2d-95.0183!3d29.5405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f5e0a0a0a0a0b%3A0x1a2b3c4d5e6f7a8b!2s1010%20Delasandri%20Ln%2C%20Kemah%2C%20TX%2077565!5e0!3m2!1sen!2sus!4v1700000000003!5m2!1sen!2sus"
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
                      <div className="dl-step-num flex-shrink-0">{s.step}</div>
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
              <div className="dl-sidebar">
                <div className="dl-cta-card shadow-lg">
                  <div className="dl-cta-header">
                    <div className="fw-bold text-uppercase mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#5eead4" }}>Delasandri Lane • Women's Home</div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)" }}>1010 Delasandri Lane</div>
                    <div className="text-secondary" style={{ fontSize: "0.8rem" }}>Kemah, TX 77565</div>
                  </div>

                  {/* Stats bar */}
                  <div className="d-flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="dl-stat flex-fill">
                      <div className="dl-stat-num">12+</div>
                      <div className="dl-stat-label">Yrs Operating</div>
                    </div>
                    <div className="dl-stat flex-fill">
                      <div className="dl-stat-num">24/7</div>
                      <div className="dl-stat-label">Support</div>
                    </div>
                    <div className="dl-stat flex-fill">
                      <div className="dl-stat-num">0</div>
                      <div className="dl-stat-label">Tolerance</div>
                    </div>
                  </div>

                  <div className="dl-cta-body">
                    <div className="d-flex flex-column gap-2 mb-4">
                      {["Beds Available Now", "Fully Furnished", "All Utilities Included", "Near Kemah Waterfront"].map((f) => (
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

                {/* Exterior thumbnail */}
                <div className="mt-3 rounded-4 overflow-hidden shadow position-relative" style={{ height: "180px" }}>
                  <Image
                    src="/delasandri-pictures/9.png"
                    alt="Front yard tree swing at Delasandri Lane Kemah"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 65%" }}
                    sizes="350px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Kemah, TX
                  </div>
                </div>

                {/* Other women's homes */}
                <div className="mt-3 p-3 rounded-4 bg-charcoal shadow-sm">
                  <div className="fw-bold mb-2" style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.06em", textTransform: "uppercase" }}>Other Women's Homes</div>
                  <div className="d-flex flex-column gap-2">
                    {[
                      { href: "/our-homes/sue-drive/", badge: "Home 4", label: "Sue Drive — Kemah" },
                      { href: "/our-homes/cottage-delasandri/", badge: "Home 5", label: "Cottage at Delasandri" },
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
      <section className="dl-bottom-cta text-light py-5 text-center">
        <div className="container py-lg-4">
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", fontSize: "0.65rem", letterSpacing: "0.18em", border: "1px solid rgba(210, 175, 120,0.2)" }}>
            Beds Available Now
          </span>
          <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
            Ready to Make Delasandri Lane<br />Your Sober Home?
          </h2>
          <p className="text-secondary mx-auto mb-5" style={{ maxWidth: "600px", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our admissions coordinators are available 24/7 to answer your questions and help you reserve a bed at our beautiful Kemah residence.
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
