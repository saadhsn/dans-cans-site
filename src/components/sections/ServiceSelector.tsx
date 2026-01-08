/*
import React from "react";
import { PHONE_TEL } from "../../config";

const ServiceSelector: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-2">
        <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Dumpster Rentals</h2>
          <p className="text-sm text-slate-600 mb-4">
            Fast delivery. Upfront pricing. Local &amp; reliable.
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold"
          >
            Book a Dumpster — Call/Text
          </a>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Home Remodeling</h2>
          <p className="text-sm text-slate-600 mb-2">
            Kitchen, bathroom, flooring, and full home renovations.
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold"
          >
            Get a Free Estimate — Call/Text
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;*/

// After removing the model selection  version

// import React from "react";
// import { PHONE_TEL } from "../../config";
//
// const ServiceSelector: React.FC = () => {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
//           <h2 className="text-xl font-bold mb-2">Dumpster Rentals</h2>
//           <p className="text-sm text-slate-600 mb-4">
//             Fast delivery. Upfront pricing. Local &amp; reliable dumpster rentals
//             for cleanouts, renovations, and more.
//           </p>
//           <a
//             href={PHONE_TEL}
//             className="inline-flex items-center px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold"
//           >
//             Book a Dumpster — Call/Text
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ServiceSelector;
// The above coard does not look better.
/*import React from "react";
import { PHONE_TEL } from "../../config";

const ServiceSelector: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="border border-slate-200 rounded-xl p-6 shadow-sm bg-slate-50">
          <h2 className="text-2xl font-bold mb-3">Dumpster Rentals</h2>

          <p className="text-sm text-slate-700 mb-4">
            Need a dumpster for a cleanout or project? We provide fast, reliable
            dumpster rentals with upfront pricing and local service.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <div>
              <h3 className="text-sm font-semibold mb-1">Perfect For:</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Home cleanouts</li>
                <li>• Small renovations</li>
                <li>• Yard waste & debris</li>
                <li>• Garage & basement cleanups</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">Our Sizes:</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• 10–15 yard dumpsters</li>
                <li>• 20 yard dumpsters</li>
                <li>• 3 or 7 day rentals</li>
                <li>• 1 ton included in price</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-4">
            Extra weight is billed at <strong>$175 per ton</strong> after the
            included 1 ton. We&apos;ll help you choose the right size for your
            project.
          </p>

          <a
            href={PHONE_TEL}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-brand text-white text-sm font-semibold"
          >
            Book a Dumpster — Call/Text
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;*/
//Version A

// import React from "react";
// import { PHONE_TEL } from "../../config";
//
// const ServiceSelector: React.FC = () => {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <div className="rounded-xl p-8 shadow-sm border border-slate-200 bg-white">
//           <h2 className="text-3xl font-bold mb-3">Dumpster Rentals</h2>
//
//           <p className="text-slate-600 text-base mb-6">
//             Affordable, reliable dumpster rentals for cleanouts, moves, yard
//             waste, renovations, and more. Fast drop-off &amp; pickup across
//             Shelton and surrounding Connecticut towns.
//           </p>
//
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <h3 className="font-semibold text-slate-800 mb-2">
//                 Sizes Available
//               </h3>
//               <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
//                 <li>• 10 Yard</li>
//                 <li>• 12 Yard</li>
//                 <li>• 15 Yard</li>
//                 <li>• 20 Yard</li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="font-semibold text-slate-800 mb-2">
//                 Rental Options
//               </h3>
//               <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
//                 <li>• 3-Day Rentals</li>
//                 <li>• 7-Day Rentals</li>
//                 <li>• 1 Ton Included</li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="font-semibold text-slate-800 mb-2">
//                 Good To Know
//               </h3>
//               <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
//                 <li>• Extra weight: $175 per ton</li>
//                 <li>• Driveway-friendly placement</li>
//                 <li>• Fast delivery &amp; pickup</li>
//               </ul>
//             </div>
//           </div>
//
//           <a
//             href={PHONE_TEL}
//             className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-dark transition"
//           >
//             Book a Dumpster — Call/Text
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ServiceSelector;

//Version B
/*import React from "react";
import { PHONE_TEL } from "../../config";

const ServiceSelector: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
              <span className="text-xl">🛻</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Dumpster Rentals</h2>
              <p className="text-sm text-slate-600">
                Simple, fast, and affordable for any cleanout or project.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📏</span>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  Flexible Sizes
                </h3>
                <p className="text-xs text-slate-600">
                  10, 12, 15, and 20 yard dumpsters to match your project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">⏱️</span>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  3 &amp; 7 Day Rentals
                </h3>
                <p className="text-xs text-slate-600">
                  1 ton included in every rental, with clear pricing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">✅</span>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  Driveway-Friendly
                </h3>
                <p className="text-xs text-slate-600">
                  Careful placement, fast pickup, and no hidden fees.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              Extra weight after the included 1 ton is billed at{" "}
              <strong>$175 per ton</strong>.
            </p>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-brand text-white text-sm font-semibold"
            >
              Book a Dumpster — Call/Text
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;*/

//Version C

import React from "react";
import { PHONE_TEL } from "../../config";

const ServiceSelector: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-[1.1fr,1fr] gap-6 items-center rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">


          <div className="p-8">
            <h2 className="text-3xl font-bold mb-3">Dumpster Rentals</h2>
            <p className="text-slate-600 text-sm mb-4">
              Order a dumpster for your home, job site, or cleanout. We deliver
              quickly, place it carefully, and pick it up when you&apos;re done.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-5 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-1">Sizes &amp; Terms</h3>
                <ul className="space-y-1 text-xs">
                  <li>• 10, 12, 15, and 20 yard dumpsters</li>
                  <li>• 3-day or 7-day rentals</li>
                  <li>• 1 ton included in every rental</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Perfect For</h3>
                <ul className="space-y-1 text-xs">
                  <li>• Home &amp; garage cleanouts</li>
                  <li>• Small renovations &amp; projects</li>
                  <li>• Yard waste &amp; debris</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Extra weight after the included 1 ton is billed at{" "}
              <strong>$175 per ton</strong>. Not sure what size you need? We can
              help you choose.
            </p>

            <a
              href={PHONE_TEL}
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-brand text-white text-sm font-semibold"
            >
              Book a Dumpster — Call/Text
            </a>
          </div>

          {/* Image side */}
          <div className="h-full">
            <img
              src="/images/dumpster-card.png"
              alt="Dumpster rental in Connecticut"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;


