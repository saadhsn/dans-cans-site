/*
import React from "react";
import { PHONE_TEL, PHONE_SMS } from "../../config";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Dumpster Rentals &amp; Home Remodeling in Shelton, CT
          </h1>
          <p className="text-lg text-slate-200 mb-8">
            Fast delivery. Honest pricing. Quality craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_TEL}
              className="px-6 py-3 rounded-md bg-brand text-white font-semibold text-sm md:text-base"
            >
              Call Now
            </a>
            <a
              href={PHONE_SMS}
              className="px-6 py-3 rounded-md border border-sky-300 text-sky-300 font-semibold text-sm md:text-base"
            >
              Text Us
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Serving Shelton and surrounding Connecticut towns.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/hero-dumpster.jpeg"  // choose your best hero shot
            alt="Dumpster rental and remodeling in Shelton, CT"
            className="h-64 md:h-80 w-full object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;*/
// After removing the remodelling

import React from "react";
import { PHONE_TEL, PHONE_SMS } from "../../config";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Affordable Dumpster Rentals in Shelton, CT
          </h1>
          <p className="text-lg text-slate-200 mb-8">
            Fast delivery. Honest pricing. Quality dumpsters for your project.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_TEL}
              className="px-6 py-3 rounded-md bg-brand text-white font-semibold text-sm md:text-base"
            >
              Call Now
            </a>
            <a
              href={PHONE_SMS}
              className="px-6 py-3 rounded-md border border-sky-300 text-sky-300 font-semibold text-sm md:text-base"
            >
              Text Us
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Serving Shelton and surrounding Connecticut towns.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/hero-dumpster.jpeg"  // choose your best hero shot
            alt="Dumpster rental and remodeling in Shelton, CT"
            className="h-64 md:h-80 w-full object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
