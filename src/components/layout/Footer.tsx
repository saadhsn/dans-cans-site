import React from "react";
import { PHONE, PHONE_TEL, PHONE_SMS } from "../../config";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="font-semibold">Dan&apos;s Cans Dumpster Rental</p>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
          <a href={PHONE_TEL} className="text-sm hover:underline">
            Call: {PHONE}
          </a>
          <a href={PHONE_SMS} className="text-sm hover:underline">
            Text Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
