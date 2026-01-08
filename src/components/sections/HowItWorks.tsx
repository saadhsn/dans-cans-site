/*
import React from "react";

const steps = [
  {
    title: "1. Call or Text Us",
    body: "Tell us your project details — we’ll help you pick the right dumpster size.",
  },
  {
    title: "2. We Deliver Fast",
    body: "Same-day or next-day delivery available in Shelton and surrounding towns.",
  },
  {
    title: "3. Pickup When You're Done",
    body: "Just text us for pickup — simple, hassle-free service.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;*/


//Option C

// import React from "react";
//
// const HowItWorksC: React.FC = () => {
//   return (
//     <section id="how-it-works" className="bg-white">
//       <div className="max-w-6xl mx-auto px-4 py-16">
//
//         <h2 className="text-3xl font-bold text-center mb-12 animate-fadeUp">
//           How It Works
//         </h2>
//
//         <div className="relative">
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>
//
//           <div className="grid md:grid-cols-3 gap-10 relative z-10">
//
//             <div className="flex flex-col items-center text-center animate-fadeUp [animation-delay:0.1s] opacity-0">
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 📞
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">Call or Text</h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 Reach out to book the dumpster that fits your project.
//               </p>
//             </div>
//
//             <div className="flex flex-col items-center text-center animate-fadeUp [animation-delay:0.25s] opacity-0">
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 🚛
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">Delivery</h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 We drop it off on time in the perfect spot.
//               </p>
//             </div>
//
//             <div className="flex flex-col items-center text-center animate-fadeUp [animation-delay:0.4s] opacity-0">
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 ♻️
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">Pickup</h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 After you're done, we pick it up & dispose responsibly.
//               </p>
//             </div>
//
//           </div>
//         </div>
//
//       </div>
//     </section>
//   );
// };
//
// export default HowItWorksC;

// With Fading
// src/components/sections/HowItWorksC.tsx
// import React from "react";
// import { motion } from "framer-motion";
// import { fadeUp, staggerContainer } from "../../lib/motion";
//
// const HowItWorks: React.FC = () => {
//   return (
//     <section id="how-it-works" className="bg-white">
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         {/* Section title */}
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//         >
//           How It Works
//         </motion.h2>
//
//         <div className="relative">
//           {/* Line behind the icons on desktop */}
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full" />
//
//           {/* Staggered steps */}
//           <motion.div
//             className="grid md:grid-cols-3 gap-10 relative z-10"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {/* Step 1 */}
//             <motion.div
//               variants={fadeUp}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 📞
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">
//                 Call or Text
//               </h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 Reach out to book the dumpster that fits your project.
//               </p>
//             </motion.div>
//
//             {/* Step 2 */}
//             <motion.div
//               variants={fadeUp}
//               transition={{ duration: 0.5, delay: 0.05 }}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 🚛
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">
//                 Delivery
//               </h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 We drop it off on time in the perfect spot.
//               </p>
//             </motion.div>
//
//             {/* Step 3 */}
//             <motion.div
//               variants={fadeUp}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="h-16 w-16 flex items-center justify-center rounded-full border border-slate-300 text-brand text-3xl bg-white">
//                 ♻️
//               </div>
//               <h3 className="mt-4 font-semibold text-slate-800 text-lg">
//                 Pickup
//               </h3>
//               <p className="text-slate-600 text-sm mt-1 max-w-xs">
//                 After you're done, we pick it up &amp; dispose responsibly.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default HowItWorks;

import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 animate-fadeUp">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center animate-fadeUp [animation-delay:0.1s] opacity-0">
            <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-full bg-brand/10 text-brand text-2xl">
              📞
            </div>
            <h3 className="mt-4 font-semibold text-slate-800 text-lg">1. Contact Us</h3>
            <p className="text-slate-600 text-sm mt-2">
              Call or text to schedule your dumpster delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center animate-fadeUp [animation-delay:0.25s] opacity-0">
            <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-full bg-brand/10 text-brand text-2xl">
              🚛
            </div>
            <h3 className="mt-4 font-semibold text-slate-800 text-lg">2. We Deliver</h3>
            <p className="text-slate-600 text-sm mt-2">
              We drop off the right size dumpster exactly where you want it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center animate-fadeUp [animation-delay:0.4s] opacity-0">
            <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-full bg-brand/10 text-brand text-2xl">
              ♻️
            </div>
            <h3 className="mt-4 font-semibold text-slate-800 text-lg">3. Pickup & Disposal</h3>
            <p className="text-slate-600 text-sm mt-2">
              When you're finished, we pick it up & handle disposal.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;



