import React from "react";

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">
          Top-Rated by Connecticut Homeowners
        </h2>
        <p className="text-sm text-slate-700 mb-6">
          ⭐⭐⭐⭐⭐ “Fast delivery and best price around.”
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
            “Fast delivery and great communication. Highly recommend!” – <b>Raymond G.</b>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
            “Clean, reliable dumpsters and honest pricing.” – <b>David R.</b>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
            “Scheduling was a breeze, and they delivered exactly on time." – <b>Sarah M.</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
