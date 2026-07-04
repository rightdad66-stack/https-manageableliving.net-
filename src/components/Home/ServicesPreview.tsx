"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";
import FadeIn from "../FadeIn";

const homes = [
  {
    src: "/idaho-drive-pictures/7.png",
    alt: "Modern kitchen island at Idaho Drive men's sober living home in League City TX",
    name: "Idaho Drive",
    tag: "Men's Home",
    location: "League City, TX",
    href: "/our-homes/idaho-drive/",
    badge: "Home 1",
    highlight: "Modern open-plan kitchen",
  },
  {
    src: "/vantage-pictures/1.png",
    alt: "Vantage Pointe exterior sober living home League City TX",
    name: "Vantage Pointe",
    tag: "Men's Home",
    location: "League City, TX",
    href: "/our-homes/vantage-pointe/",
    badge: "Home 2",
    highlight: "Private patio & pool area",
  },
  {
    src: "/delasandri-pictures/11.png",
    alt: "Delasandri Lane sober living home exterior in Kemah TX — turquoise ranch-style",
    name: "Delasandri Lane",
    tag: "Women's Home",
    location: "Kemah, TX",
    href: "/our-homes/delasandri/",
    badge: "Home 3",
    highlight: "Spacious coastal ranch",
  },
  {
    src: "/sue-drive-pictures/2.png",
    alt: "Sue Drive sober living home exterior Kemah TX",
    name: "Sue Drive",
    tag: "Women's Home",
    location: "Kemah, TX",
    href: "/our-homes/sue-drive/",
    badge: "Home 4",
    highlight: "Warm brick ranch with porch",
  },
  {
    src: "/cottage-pictures/6.png",
    alt: "Granite kitchen island at the Cottage at Delasandri Kemah TX",
    name: "Cottage at Delasandri",
    tag: "Women's Home",
    location: "Kemah, TX",
    href: "/our-homes/cottage-delasandri/",
    badge: "Home 5",
    highlight: "Premium granite kitchen & 2 baths",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-5" style={{ background: "var(--black)" }}>
      <div className="container py-lg-5">

        <SlideUp className="text-center mb-5 pb-lg-2">
          <span className="badge bg-dark text-warning text-uppercase mb-3 px-3 py-2 fw-bold" style={{ letterSpacing: "0.1em", fontSize: "0.65rem" }}>Our Homes</span>
          <h2 className="fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            5 Homes Across League City &amp; Kemah
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "640px", lineHeight: 1.8 }}>
            Every Manageable Living home is professionally managed, fully furnished, and designed for long-term sobriety. Choose from men's or women's residences.
          </p>
        </SlideUp>

        {/* Gender filter strip */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <span className="badge rounded-pill px-4 py-2 fw-semibold" style={{ background: "rgba(210, 175, 120, 0.1)", color: "var(--bs-primary)", border: "1px solid rgba(210, 175, 120, 0.3)", fontSize: "0.78rem" }}>♂ Men's Homes: League City</span>
          <span className="badge rounded-pill px-4 py-2 fw-semibold" style={{ background: "rgba(20,184,166,0.1)", color: "#2dd4bf", border: "1px solid rgba(20,184,166,0.3)", fontSize: "0.78rem" }}>♀ Women's Homes: Kemah</span>
        </div>

        {/* Home cards grid */}
        <div className="masonry-grid">
          {homes.map((h, i) => (
            <div className="masonry-item" key={h.name}>
              <FadeIn delay={i * 0.1}>
                <a
                  href={h.href}
                  className="text-decoration-none d-block h-100"
                  aria-label={`View ${h.name} sober living home`}
                >
                  <div
                    className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                    style={{ transition: "transform 0.25s, box-shadow 0.25s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.14)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                  >
                    {/* Photo */}
                    <div className="position-relative w-100">
                      <Image
                        src={h.src}
                        alt={h.alt}
                        width={800}
                        height={600}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
                      {/* Badge */}
                      <span
                        style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "rgba(210, 175, 120,0.9)", color: "#000", fontSize: "0.6rem", fontWeight: 700, borderRadius: "4px", padding: "3px 8px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        {h.badge}
                      </span>
                      {/* Gender tag */}
                      <span
                        style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: "0.6rem", fontWeight: 600, borderRadius: "50px", padding: "3px 10px", backdropFilter: "blur(6px)" }}
                      >
                        {h.tag}
                      </span>
                      {/* Location overlay */}
                      <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                        <div className="text-white fw-bold" style={{ fontSize: "0.8rem" }}>{h.name}</div>
                        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.65rem" }}>{h.location}</div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="card-body p-4 bg-charcoal d-flex flex-column">
                      <p className="text-secondary mb-3 flex-grow-1" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                        {h.highlight}
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold text-light" style={{ fontSize: "0.8rem" }}>View Home</span>
                        <svg fill="none" stroke="#d2af78" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            </div>
          ))}

          {/* CTA card — 6th cell */}
          <div className="masonry-item">
            <FadeIn delay={0.5}>
              <div className="card border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center text-center p-5 shadow-sm" style={{ background: "linear-gradient(135deg, #111 0%, #1a1a0e 100%)", minHeight: "340px" }}>
                <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", border: "1px solid rgba(210, 175, 120,0.3)", fontSize: "0.65rem", letterSpacing: "0.12em" }}>Beds Available Now</span>
                <h3 className="text-white fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>Ready to Find Your Home?</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }} className="mb-4">Our team is available 24/7 to answer questions and guide you to the right residence.</p>
                <a href="/our-homes/" className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm mb-3" style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}>Browse All Homes</a>
                <a href="tel:0017134099594" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", textDecoration: "none" }}>📞 (713) 409-9594</a>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
