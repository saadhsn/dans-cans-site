import React from "react";
import { PHONE_TEL } from "../../config";

const services = [
  {
    title: "Kitchen Remodeling",
    bullets: [
      "Custom layouts & design guidance",
      "Cabinets, counters, backsplashes",
      "Full kitchen upgrades",
    ],
  },
  {
    title: "Bathroom Remodeling",
    bullets: [
      "Tile, showers, vanities, fixtures",
      "Waterproofing & professional installation",
      "Clean, modern finishes",
    ],
  },
  {
    title: "Flooring Installation",
    bullets: [
      "Vinyl, laminate, hardwood & more",
      "Professional cutting & installation",
      "Durable, beautiful results",
    ],
  },
  {
    title: "Full Home Remodeling",
    bullets: [
      "Interior transformations",
      "Open-concept redesigns",
      "Complete renovation services",
    ],
  },
];

const Remodeling: React.FC = () => {
  return (
    <section id="remodeling" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-3">
          Home Remodeling &amp; Design
        </h2>
        <p className="text-sm text-slate-700 mb-8 max-w-2xl">
          We offer full-service home remodeling with clean, reliable workmanship
          and attention to detail — from kitchens and bathrooms to flooring and
          full home transformations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-200 p-6 bg-slate-50"
            >
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <ul className="text-sm text-slate-700 space-y-1 mb-4">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold"
              >
                Call/Text for a Free Estimate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Remodeling;
