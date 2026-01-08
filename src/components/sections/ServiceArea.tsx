import React from "react";

const towns = [
  "Shelton",
  "Derby",
  "Ansonia",
  "Trumbull",
  "Stratford",
  "Orange",
  "Nearby CT areas",
];

const ServiceArea: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Proudly Serving Connecticut</h2>
        <p className="text-sm text-slate-700 mb-4">
          We deliver dumpsters and provide remodeling services throughout
          Shelton, CT and surrounding towns.
        </p>
        <ul className="flex flex-wrap gap-3 text-sm text-slate-800">
          {towns.map((t) => (
            <li
              key={t}
              className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceArea;
