"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";

const photoBg = [
  "/delasandri-pictures/6.png",
  "/idaho-drive-pictures/9.png",
  "/sue-drive-pictures/7.png",
  "/vantage-pictures/6.png",
  "/cottage-pictures/7.png",
  "/delasandri-pictures/7.png",
];

const items = [
  { title: "Safe & Managed Housing", desc: "Professionally managed sober living homes designed for stable recovery." },
  { title: "Structured Routine", desc: "Structured environments focused on personal accountability, routines, and sobriety." },
  { title: "24/7 Support Staff", desc: "Immediate support available for everyday resident needs and crisis situations." },
  { title: "Peer Communities", desc: "Peer-driven recovery networks that encourage connection and lasting relationships." },
  { title: "Clinical Coordination", desc: "Direct coordination with exclusive treatment centers for seamless step-down transitions." },
  { title: "Rebuilding Support", desc: "Ongoing support designed to help residents maintain sobriety and rebuild with purpose." },
];

export default function WhatWeProvide() {
  return (
    <section className="py-5" style={{ background: "var(--black)" }}>
      <div className="container py-lg-5">

        <SlideUp className="text-center mb-5 pb-lg-2">
          <span className="badge text-warning text-uppercase mb-3 px-3 py-2" style={{ background: "rgba(210, 175, 120,0.1)", border: "1px solid rgba(210, 175, 120,0.25)", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
            What We Provide
          </span>
          <h2 className="text-white fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What Manageable Living Provides
          </h2>
          <p className="mx-auto" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "600px", lineHeight: 1.8 }}>
            Every service we offer is built around one goal: helping residents stay sober, stay accountable, and rebuild their lives with confidence.
          </p>
        </SlideUp>

        {/* Scrolling photo strip */}
        <div className="d-flex gap-3 mb-5 overflow-hidden" aria-hidden="true">
          {photoBg.map((src, i) => (
            <div key={i} className="position-relative rounded-3 overflow-hidden flex-shrink-0" style={{ width: "160px", height: "100px", opacity: 0.55 }}>
              <Image src={src} alt="" fill style={{ objectFit: "cover" }} sizes="160px" loading="lazy" />
            </div>
          ))}
        </div>

        {/* 6 provision items in 2-col dark cards */}
        <div className="row g-4">
          {items.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <SlideUp delay={0.1 + i * 0.1}>
                <div
                  className="d-flex align-items-start gap-3 p-4 rounded-4 h-100"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(210, 175, 120,0.12)", border: "1px solid rgba(210, 175, 120,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <svg fill="none" stroke="#d2af78" strokeWidth="2.5" viewBox="0 0 24 24" width="16" height="16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white d-block mb-1" style={{ fontSize: "0.9rem" }}>{item.title}</strong>
                    <p className="mb-0" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
