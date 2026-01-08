import React from "react";
import { PHONE_TEL } from "../../config";

const dumpsterOptions = [
  {
    title: "10–15 Yard Dumpsters",
    description: "Perfect for cleanouts, small remodels, and yard debris.",
    prices: [
      "3-Day Rental: $399 (includes 1 ton)",
      "7-Day Rental: $430 (includes 1 ton)",
    ],
  },
  {
    title: "20 Yard Dumpster",
    description:
      "Ideal for large cleanouts, renovations, and construction projects.",
    prices: [
      "3-Day Rental: $433 (includes 1 ton)",
      "7-Day Rental: $460 (includes 1 ton)",
    ],
  },
];

const Dumpsters: React.FC = () => {
  return (
    <section id="dumpsters" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Dumpster Sizes &amp; Pricing</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dumpsterOptions.map((opt) => (
            <div
              key={opt.title}
              className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{opt.title}</h3>
                <p className="text-sm text-slate-700 mb-3">{opt.description}</p>
                <ul className="text-sm text-slate-800 space-y-1 mb-4">
                  {opt.prices.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 mb-2">
                  Extra weight: anything over the included 1 ton is billed at{" "}
                  <strong>$175 per ton</strong>.
                </p>
                <p className="text-xs text-slate-500">
                  All rentals include driveway-safe placement, fast delivery,
                  and easy pickup.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold"
                >
                  Book Now — Call/Text
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dumpsters;
