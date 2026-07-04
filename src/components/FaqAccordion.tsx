"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "living",
    question: "What is sober living and who is it for?",
    answer: "Sober living is a structured, drug-free residential environment designed for people in recovery from addiction. It bridges the gap between completing inpatient treatment and returning to fully independent life. Manageable Living is ideal for anyone who has completed detox, residential treatment, PHP, or IOP and needs a safe, accountable environment to continue their recovery."
  },
  {
    category: "admissions",
    question: "Do I need to have finished rehab or treatment to apply?",
    answer: "Completing inpatient treatment is preferred but not always required. We evaluate each applicant individually based on their commitment to sobriety and their situation. Call us to discuss your specific circumstances."
  },
  {
    category: "living",
    question: "How long can I stay?",
    answer: "There is no fixed minimum or maximum stay. Most residents stay between 90 days and 12 months depending on their recovery goals. We work with each resident individually to establish an appropriate timeline."
  },
  {
    category: "costs",
    question: "What does it cost, and is insurance accepted?",
    answer: "Monthly rates vary by home and room type. Please contact us for current pricing. Sober living is generally not covered by health insurance, though we can provide documentation for reimbursement requests. Payment plans may be available."
  },
  {
    category: "living",
    question: "Are drug and alcohol tests conducted?",
    answer: "Yes. Random drug and alcohol testing is a standard and non-negotiable part of our program. This protects all residents and maintains the integrity of our recovery environment."
  },
  {
    category: "living",
    question: "Can I work while living at Manageable Living?",
    answer: "Absolutely — and we strongly encourage it. Our job-friendly housing model includes flexible scheduling for working residents and access to employment support resources."
  },
  {
    category: "living",
    question: "Can family members visit?",
    answer: "Yes. Visitor guidelines are in place for each home, and sober family visits are generally permitted during designated hours. We encourage healthy family involvement as part of the recovery process."
  },
  {
    category: "living",
    question: "What happens if a resident relapses?",
    answer: "If a resident relapses, they may be asked to leave the home to protect other residents. We handle each situation with compassion and will work to connect the individual with appropriate treatment resources. Re-admission may be possible after a period of demonstrated stability."
  },
  {
    category: "admissions",
    question: "Do you coordinate with treatment centers?",
    answer: "Yes. Manageable Living actively coordinates with treatment centers to facilitate smooth step-down transitions. We also work with exclusive treatment partners who can provide higher levels of care if a resident needs it."
  },
  {
    category: "living",
    question: "Where exactly are your homes located?",
    answer: "We have five homes in the Houston Bay Area — two in League City and three in Kemah, Texas. Exact addresses are shared upon inquiry to protect resident privacy. All homes are in safe, quiet residential neighborhoods."
  },
  {
    category: "living",
    question: "Are your homes LGBTQ+ friendly?",
    answer: "Yes. Manageable Living welcomes all individuals regardless of sexual orientation or gender identity. We are committed to maintaining a safe, respectful, and inclusive environment for everyone."
  },
  {
    category: "living",
    question: "How is Manageable Living different from a treatment center?",
    answer: "We are a sober living home, not a treatment center. We do not do not provide clinical or medical treatment. We provide a safe, structured residential environment that supports individuals who are already working on their recovery. We complement — not replace — clinical treatment."
  }
];

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = activeCategory === "all" ? faqData : faqData.filter(f => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5" aria-label="FAQ Category Filters">
        <button 
          className={`btn rounded-pill px-4 py-2 fw-bold text-uppercase transition-all ${activeCategory === "all" ? "btn-dark text-warning" : "btn-outline-secondary hover-dark"}`}
          style={{ letterSpacing: '0.05em', fontSize: '0.85rem' }}
          onClick={() => { setActiveCategory("all"); setOpenIndex(null); }}
        >
          All Questions ({faqData.length})
        </button>
        <button 
          className={`btn rounded-pill px-4 py-2 fw-bold text-uppercase transition-all ${activeCategory === "admissions" ? "btn-dark text-warning" : "btn-outline-secondary hover-dark"}`}
          style={{ letterSpacing: '0.05em', fontSize: '0.85rem' }}
          onClick={() => { setActiveCategory("admissions"); setOpenIndex(null); }}
        >
          Admissions & Eligibility
        </button>
        <button 
          className={`btn rounded-pill px-4 py-2 fw-bold text-uppercase transition-all ${activeCategory === "living" ? "btn-dark text-warning" : "btn-outline-secondary hover-dark"}`}
          style={{ letterSpacing: '0.05em', fontSize: '0.85rem' }}
          onClick={() => { setActiveCategory("living"); setOpenIndex(null); }}
        >
          Living Experience & Rules
        </button>
        <button 
          className={`btn rounded-pill px-4 py-2 fw-bold text-uppercase transition-all ${activeCategory === "costs" ? "btn-dark text-warning" : "btn-outline-secondary hover-dark"}`}
          style={{ letterSpacing: '0.05em', fontSize: '0.85rem' }}
          onClick={() => { setActiveCategory("costs"); setOpenIndex(null); }}
        >
          Costs & Insurance
        </button>
      </div>

      <div className="accordion accordion-flush bg-transparent" id="faqAccordion">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div key={idx} className="accordion-item bg-transparent border-top border-bottom border-secondary border-opacity-25 mb-0">
              <h3 className="accordion-header">
                <button 
                  className={`accordion-button bg-transparent shadow-none fw-bold fs-5 py-4 ${isOpen ? "text-light" : "text-secondary collapsed"}`}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className="me-3">{faq.question}</span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="accordion-body text-secondary fs-6 pb-4 pt-0 lh-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}