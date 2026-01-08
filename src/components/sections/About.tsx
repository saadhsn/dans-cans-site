import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2 items-center">

           <img
             src="/images/home-team.avif"   // maybe truck, owner, or team photo
             alt="Dan's Cans team in Connecticut"
             className="h-56 md:h-72 w-full object-cover rounded-xl"
           />

        <div>
          <h2 className="text-2xl font-bold mb-4">About Dan&apos;s Cans</h2>
          <p className="text-sm text-slate-700 mb-4">
            We’re a family-owned business proudly serving Shelton, CT and nearby
            towns. We provide fast, reliable dumpster rentals with honest pricing and clean job sites.

          </p>
          <p className="text-sm text-slate-700 mb-4">
            We treat your property like our own, ensuring a smooth delivery and pickup every time.
            Customer satisfaction is our top priority,
            reliable dumpster rental service that puts you first. We handle the logistics so you can focus on your project.
          </p>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Fast delivery &amp; pickup</li>
            <li>• Friendly, reliable service</li>
            <li>• Honest, transparent pricing</li>
            <li>• Top-rated by CT homeowners</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
