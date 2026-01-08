/*
import React, { useState } from "react";

type FAQItem = { question: string; answer: string };

const dumpsterFaq: FAQItem[] = [
  {
    question: "What size dumpster do I need?",
    answer:
      "10–15 yard dumpsters are great for cleanouts and small projects. 20 yard dumpsters are best for larger renovations and construction.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "We offer 3-day and 7-day rentals. Need longer? Just ask.",
  },
  {
    question: "What items are not allowed?",
    answer:
      "Hazardous materials, chemicals, liquids, paint, tires, and batteries are not allowed. Call us if you're unsure about a specific item.",
  },
  {
    question: "What if I exceed the weight limit?",
    answer:
      "Anything over the included 1 ton is billed at $175 per ton. We’ll provide the final weight from the scale ticket.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, same-day or next-day delivery is often available. Call or text to check availability.",
  },
];

const remodelingFaq: FAQItem[] = [
  {
    question: "Do you provide free estimates?",
    answer: "Yes — call or text us to schedule a free, no-obligation estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured in Connecticut.",
  },
  {
    question: "Do you help with design?",
    answer:
      "Absolutely. We help with layout, materials, and finishes to get the look you want.",
  },
  {
    question: "How long does a remodel take?",
    answer:
      "It depends on the project. Kitchens and bathrooms typically range from 1–4 weeks. We’ll provide a timeline during your estimate.",
  },
];

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dumpster" | "remodeling">(
    "dumpster"
  );
  const faqs = activeTab === "dumpster" ? dumpsterFaq : remodelingFaq;

  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="flex gap-3 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeTab === "dumpster"
                ? "bg-brand text-white"
                : "bg-white border border-slate-300 text-slate-700"
            }`}
            onClick={() => setActiveTab("dumpster")}
          >
            Dumpster FAQs
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeTab === "remodeling"
                ? "bg-brand text-white"
                : "bg-white border border-slate-300 text-slate-700"
            }`}
            onClick={() => setActiveTab("remodeling")}
          >
            Remodeling FAQs
          </button>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border border-slate-200 bg-white rounded-md px-4 py-3"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-800 flex justify-between items-center">
                {item.question}
                <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;*/
// After removing the remodelling completely


import React from "react";

type FAQItem = { question: string; answer: string };

const dumpsterFaq: FAQItem[] = [
  {
    question: "What size dumpster do I need?",
    answer:
      "10–15 yard dumpsters are great for cleanouts and small projects. 20 yard dumpsters are best for larger renovations and construction.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "We offer 3-day and 7-day rentals. Need longer? Just ask.",
  },
  {
    question: "What items are not allowed?",
    answer:
      "Hazardous materials, chemicals, liquids, paint, tires, and batteries are not allowed. Call us if you're unsure about a specific item.",
  },
  {
    question: "What if I exceed the weight limit?",
    answer:
      "Anything over the included 1 ton is billed at $175 per ton. We’ll provide the final weight from the scale ticket.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, same-day or next-day delivery is often available. Call or text to check availability.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {dumpsterFaq.map((item) => (
            <details
              key={item.question}
              className="group border border-slate-200 bg-white rounded-md px-4 py-3"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-800 flex justify-between items-center">
                {item.question}
                <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
