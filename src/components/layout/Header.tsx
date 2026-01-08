/*
import React from "react";
import { PHONE_TEL, PHONE_SMS } from "../../config";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"          // put your real logo file here
            alt="Dan's Cans Dumpster Rental"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg">
            Dan&apos;s Cans Dumpster Rental
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#dumpsters" className="hover:text-slate-600">Dumpsters</a>
          <a href="#remodeling" className="hover:text-slate-600">Remodeling</a>
          <a href="#reviews" className="hover:text-slate-600">Reviews</a>
          <a href="#gallery" className="hover:text-slate-600">Gallery</a>
          <a href="#faq" className="hover:text-slate-600">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold"
          >
            Call Now
          </a>
          <a
            href={PHONE_SMS}
            className="px-4 py-2 rounded-md border border-brand text-brand text-sm font-semibold"
          >
            Text Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;*/
// After removing remodeling
import React from "react";
import { PHONE_TEL, PHONE_SMS } from "../../config";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"          // put your real logo file here
            alt="Dan's Cans Dumpster Rental"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg">
            Dan&apos;s Cans Dumpster Rental
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#dumpsters" className="hover:text-slate-600">Dumpsters</a>
          <a href="#reviews" className="hover:text-slate-600">Reviews</a>
          <a href="#gallery" className="hover:text-slate-600">Gallery</a>
          <a href="#faq" className="hover:text-slate-600">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold"
          >
            Call Now
          </a>
          <a
            href={PHONE_SMS}
            className="px-4 py-2 rounded-md border border-brand text-brand text-sm font-semibold"
          >
            Text Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

