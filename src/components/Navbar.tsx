"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const programs = [
  {
    href: "/programs/mens-sober-living/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    ),
    label: "Men's Sober Living",
    desc: "Structured, accountable housing for men in recovery.",
  },
  {
    href: "/programs/womens-sober-living/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    ),
    label: "Women's Sober Living",
    desc: "Safe, supportive homes exclusively for women.",
  },
  {
    href: "/programs/12-step-integration/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
    ),
    label: "12-Step Integration",
    desc: "Daily meeting attendance woven into community life.",
  },
  {
    href: "/programs/life-skills/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
    ),
    label: "Life Skills Development",
    desc: "Financial literacy, employment prep, and independence.",
  },
  {
    href: "/programs/job-friendly-housing/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
    ),
    label: "Job-Friendly Housing",
    desc: "Flexible schedules that support full-time employment.",
  },
  {
    href: "/programs/aftercare-support/",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    ),
    label: "Aftercare & Support",
    desc: "Ongoing community care after primary treatment.",
  },
];

const homes = [
  {
    href: "/our-homes/idaho-drive/",
    label: "Idaho Drive",
    city: "League City, TX",
    desc: "2003 Idaho Dr — spacious, fully furnished.",
    badge: "Home 1",
  },
  {
    href: "/our-homes/vantage-pointe/",
    label: "Vantage Pointe",
    city: "League City, TX",
    desc: "315 Vantage Pointe Circle — large communal spaces.",
    badge: "Home 2",
  },
  {
    href: "/our-homes/delasandri/",
    label: "Delasandri Lane",
    city: "Kemah, TX",
    desc: "1010 Delasandri Ln — close to the waterfront.",
    badge: "Home 3",
  },
  {
    href: "/our-homes/sue-drive/",
    label: "Sue Drive",
    city: "Kemah, TX",
    desc: "1009 Sue Dr — quiet residential street.",
    badge: "Home 4",
  },
  {
    href: "/our-homes/cottage-delasandri/",
    label: "Cottage at Delasandri",
    city: "Kemah, TX",
    desc: "1011 Sue Dr — intimate cottage-style living.",
    badge: "Home 5",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSub(null);
  }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggle = (name: string) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  return (
    <>
      <style>{`
        .ml-nav {
          background: rgba(10, 10, 10, 0.97) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(210, 175, 120, 0.18) !important;
          position: sticky;
          top: 0;
          z-index: 1030;
        }
        .ml-brand {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.45rem;
          font-weight: 300;
          letter-spacing: 0.04em;
          color: #fff !important;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .ml-brand:hover { opacity: 0.85; }
        .ml-brand span { font-weight: 700; }

        /* Topbar links */
        .ml-nav-link {
          color: rgba(255,255,255,0.82) !important;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.45rem 0.6rem !important;
          border-radius: 6px;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          position: relative;
          white-space: nowrap;
        }
        .ml-nav-link:hover, .ml-nav-link.active { color: #d2af78 !important; }

        /* Mega / standard drop trigger */
        .ml-drop-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }
        .ml-drop-btn .ml-chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.2s;
          flex-shrink: 0;
          color: rgba(255,255,255,0.5);
        }
        .ml-drop-btn[aria-expanded="true"] .ml-chevron { transform: rotate(180deg); color: #d2af78; }

        /* ── MEGA MENU PANEL ── */
        .ml-mega {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #111;
          border: 1px solid rgba(210, 175, 120,0.18);
          border-radius: 16px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55);
          padding: 2rem;
          min-width: 820px;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          z-index: 2000;
        }
        .ml-mega.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        /* Standard single drop */
        .ml-drop {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          background: #111;
          border: 1px solid rgba(210, 175, 120,0.18);
          border-radius: 12px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          padding: 0.5rem;
          min-width: 240px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 2000;
        }
        .ml-drop.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .ml-drop a {
          display: block;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          color: rgba(255,255,255,0.78);
          font-size: 0.82rem;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          letter-spacing: 0.02em;
        }
        .ml-drop a:hover { background: rgba(210, 175, 120,0.1); color: #d2af78; }

        /* Mega grid items */
        .ml-mega-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          color: inherit;
        }
        .ml-mega-item:hover { background: rgba(210, 175, 120,0.08); }
        .ml-mega-item:hover .ml-mi-icon { color: #d2af78; }
        .ml-mega-item:hover .ml-mi-label { color: #fff; }
        .ml-mi-icon {
          color: rgba(210, 175, 120,0.7);
          flex-shrink: 0;
          margin-top: 2px;
          transition: color 0.15s;
        }
        .ml-mi-label {
          font-size: 0.83rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
          line-height: 1.2;
          text-transform: uppercase;
          margin-bottom: 3px;
          transition: color 0.15s;
        }
        .ml-mi-desc {
          font-size: 0.73rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.4;
        }

        /* Mega section label */
        .ml-mega-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(210, 175, 120,0.6);
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
        }

        /* Home card in mega */
        .ml-home-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.7rem 0.9rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .ml-home-card:hover { background: rgba(210, 175, 120,0.08); }
        .ml-home-card:hover .ml-home-name { color: #d2af78; }
        .ml-home-badge {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #000;
          background: #d2af78;
          border-radius: 4px;
          padding: 2px 6px;
          flex-shrink: 0;
        }
        .ml-home-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
          line-height: 1.2;
          transition: color 0.15s;
        }
        .ml-home-city {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.38);
        }

        /* Mega divider */
        .ml-mega-divider {
          width: 1px;
          background: rgba(255,255,255,0.07);
          margin: 0 0.5rem;
        }

        /* CTA strip in mega */
        .ml-mega-cta {
          background: rgba(210, 175, 120,0.06);
          border: 1px solid rgba(210, 175, 120,0.15);
          border-radius: 10px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .ml-mega-cta-text {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.55);
        }
        .ml-mega-cta-text strong { color: rgba(255,255,255,0.88); }
        .ml-mega-cta-btn {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #d2af78;
          color: #000;
          border: none;
          border-radius: 50px;
          padding: 0.45rem 1.2rem;
          white-space: nowrap;
          text-decoration: none;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.15s;
        }
        .ml-mega-cta-btn:hover { background: #ebd3a2; transform: scale(1.03); color: #000; }

        /* Position context */
        .ml-item-wrap { position: relative; }

        /* Mobile Styles */
        .ml-mobile-drawer {
          display: none;
          background: #0a0a0a;
          border-top: 1px solid rgba(210, 175, 120,0.12);
        }
        .ml-mobile-drawer.open { display: block; }
        .ml-mobile-link {
          display: block;
          padding: 0.85rem 1.5rem;
          color: rgba(255,255,255,0.82) !important;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.15s, background 0.15s;
        }
        .ml-mobile-link:hover { color: #d2af78 !important; background: rgba(210, 175, 120,0.06); }
        .ml-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          color: rgba(255,255,255,0.82);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          background: none;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: color 0.15s;
        }
        .ml-mobile-toggle:hover, .ml-mobile-toggle.active { color: #d2af78; }
        .ml-mobile-sub {
          display: none;
          background: rgba(255,255,255,0.03);
        }
        .ml-mobile-sub.open { display: block; }
        .ml-mobile-sub a {
          display: block;
          padding: 0.7rem 2.5rem;
          color: rgba(255,255,255,0.55);
          font-size: 0.75rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.15s;
        }
        .ml-mobile-sub a:hover { color: #d2af78; }

        /* Toggler lines */
        .ml-toggler {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
        }
        .ml-toggler span {
          display: block;
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: all 0.25s;
          transform-origin: center;
        }
        .ml-toggler.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ml-toggler.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ml-toggler.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 991px) {
          .ml-desktop-nav { display: none !important; }
        }
        @media (min-width: 992px) {
          .ml-mobile-only { display: none !important; }
        }
      `}</style>

      <nav className="ml-nav shadow-sm py-2" ref={navRef} aria-label="Main navigation">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Brand */}
          <Link href="/" className="ml-brand d-flex align-items-center">
            <Image src="/MS Final hori.svg" alt="Manageable Living" width={150} height={120} priority style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <div className="d-none d-lg-flex align-items-center gap-1 ml-desktop-nav position-relative">

            <Link href="/" className="ml-nav-link">Home</Link>
            <Link href="/about-us/" className="ml-nav-link">About Us</Link>

            {/* Programs mega */}
            <div className="ml-item-wrap">
              <button
                className="ml-nav-link ml-drop-btn"
                aria-expanded={activeDropdown === "programs"}
                onClick={() => toggle("programs")}
              >
                Programs
                <svg className="ml-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div className={`ml-mega ${activeDropdown === "programs" ? "open" : ""}`} role="menu">
                <p className="ml-mega-label">Recovery Programs</p>
                <div className="row g-1">
                  {programs.map((p) => (
                    <div className="col-lg-4" key={p.href}>
                      <Link href={p.href} className="ml-mega-item" role="menuitem">
                        <span className="ml-mi-icon">{p.icon}</span>
                        <span>
                          <div className="ml-mi-label">{p.label}</div>
                          <div className="ml-mi-desc">{p.desc}</div>
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="ml-mega-cta">
                  <div className="ml-mega-cta-text">
                    <strong>Ready to start your recovery?</strong><br />Beds available now in League City &amp; Kemah.
                  </div>
                  <Link href="/admissions/" className="ml-mega-cta-btn">Apply Now</Link>
                </div>
              </div>
            </div>

            {/* Men's Homes dropdown */}
            <div className="ml-item-wrap">
              <button
                className="ml-nav-link ml-drop-btn"
                aria-expanded={activeDropdown === "mens"}
                onClick={() => toggle("mens")}
              >
                Men&apos;s Homes
                <svg className="ml-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`ml-drop ${activeDropdown === "mens" ? "open" : ""}`} role="menu">
                {homes.slice(0, 2).map(h => (
                  <Link href={h.href} key={h.href}>{h.label} <span style={{ opacity: 0.5, fontSize: "0.8em" }}>({h.city})</span></Link>
                ))}
                <div className="my-1" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
                <Link href="/programs/mens-sober-living/" style={{ color: "#d2af78" }}>Men&apos;s Program Details →</Link>
              </div>
            </div>

            {/* Women's Homes dropdown */}
            <div className="ml-item-wrap">
              <button
                className="ml-nav-link ml-drop-btn"
                aria-expanded={activeDropdown === "womens"}
                onClick={() => toggle("womens")}
              >
                Women&apos;s Homes
                <svg className="ml-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`ml-drop ${activeDropdown === "womens" ? "open" : ""}`} role="menu">
                {homes.slice(2).map(h => (
                  <Link href={h.href} key={h.href}>{h.label} <span style={{ opacity: 0.5, fontSize: "0.8em" }}>({h.city})</span></Link>
                ))}
                <div className="my-1" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
                <Link href="/programs/womens-sober-living/" style={{ color: "#d2af78" }}>Women&apos;s Program Details →</Link>
              </div>
            </div>
            <Link href="/faq/" className="ml-nav-link">FAQs</Link>
            <Link href="/contact/" className="ml-nav-link">Contact</Link>

            <div className="ms-3">
              <Link href="/admissions/" className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-uppercase" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile toggler */}
          <button
            className={`ml-toggler ml-mobile-only ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`ml-mobile-drawer ml-mobile-only ${mobileOpen ? "open" : ""}`}>
          <Link href="/" className="ml-mobile-link">Home</Link>
          <Link href="/about-us/" className="ml-mobile-link">About Us</Link>

          <button
            className={`ml-mobile-toggle ${mobileSub === "programs" ? "active" : ""}`}
            onClick={() => setMobileSub(mobileSub === "programs" ? null : "programs")}
          >
            Programs
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14" style={{ transition: "transform 0.2s", transform: mobileSub === "programs" ? "rotate(180deg)" : "none" }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className={`ml-mobile-sub ${mobileSub === "programs" ? "open" : ""}`}>
            <Link href="/programs/">All Programs</Link>
            {programs.map((p) => <Link href={p.href} key={p.href}>{p.label}</Link>)}
          </div>

          {/* Men's Homes toggler */}
          <button
            className={`ml-mobile-toggle ${mobileSub === "mens" ? "active" : ""}`}
            onClick={() => setMobileSub(mobileSub === "mens" ? null : "mens")}
          >
            Men&apos;s Homes
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14" style={{ transition: "transform 0.2s", transform: mobileSub === "mens" ? "rotate(180deg)" : "none" }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className={`ml-mobile-sub ${mobileSub === "mens" ? "open" : ""}`}>
            {homes.slice(0, 2).map((h) => <Link href={h.href} key={h.href}>{h.label} — {h.city}</Link>)}
            <Link href="/programs/mens-sober-living/" style={{ color: "rgba(210, 175, 120,0.55)", fontStyle: "italic" }}>Men&apos;s Program Details →</Link>
          </div>

          {/* Women's Homes toggler */}
          <button
            className={`ml-mobile-toggle ${mobileSub === "womens" ? "active" : ""}`}
            onClick={() => setMobileSub(mobileSub === "womens" ? null : "womens")}
          >
            Women&apos;s Homes
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14" style={{ transition: "transform 0.2s", transform: mobileSub === "womens" ? "rotate(180deg)" : "none" }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className={`ml-mobile-sub ${mobileSub === "womens" ? "open" : ""}`}>
            {homes.slice(2).map((h) => <Link href={h.href} key={h.href}>{h.label} — {h.city}</Link>)}
            <Link href="/programs/womens-sober-living/" style={{ color: "rgba(210, 175, 120,0.55)", fontStyle: "italic" }}>Women&apos;s Program Details →</Link>
          </div>
          <Link href="/faq/" className="ml-mobile-link">FAQs</Link>
          <Link href="/contact/" className="ml-mobile-link">Contact</Link>

          <div className="p-3">
            <Link href="/admissions/" className="btn btn-warning rounded-pill fw-bold text-uppercase w-100 py-3" style={{ letterSpacing: "0.1em" }}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}