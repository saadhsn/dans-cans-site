
// import React from "react";
//
// function App() {
//   return (
//     <div className="text-slate-900">
//       <h1 className="text-3xl font-bold p-6">
//         Dan’s Cans website is loading...
//       </h1>
//     </div>
//   );
// }
//
// export default App;

// import React from "react";
//
// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-900">
//       <h1 className="text-4xl font-extrabold text-rose-400">
//         Tailwind IS working 🎉
//       </h1>
//     </div>
//   );
// }
//
// export default App;

// *********** This was the first and old version** Now I am removinng the Remodelling version******************//
/*

import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ServiceSelector from "./components/sections/ServiceSelector";
import HowItWorks from "./components/sections/HowItWorks";
import About from "./components/sections/About";
import Dumpsters from "./components/sections/Dumpsters";
import Remodeling from "./components/sections/Remodeling";
import Reviews from "./components/sections/Reviews";
import Gallery from "./components/sections/Gallery";
import ServiceArea from "./components/sections/ServiceArea";
import FAQ from "./components/sections/FAQ";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceSelector />
        <HowItWorks />
        <About />
        <Dumpsters />
        <Remodeling />
        <Reviews />
        <Gallery />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
*/

import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ServiceSelector from "./components/sections/ServiceSelector";
import HowItWorks from "./components/sections/HowItWorks";
import About from "./components/sections/About";
import Dumpsters from "./components/sections/Dumpsters";
import Reviews from "./components/sections/Reviews";
import Gallery from "./components/sections/Gallery";
import ServiceArea from "./components/sections/ServiceArea";
import FAQ from "./components/sections/FAQ";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceSelector />
        <HowItWorks />
        <About />
        <Dumpsters />
        <Reviews />
        <Gallery />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;


