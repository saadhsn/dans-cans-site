// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{ts,tsx,js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           DEFAULT: "#0f4c81", // adjust to match logo later
//           light: "#3f7bb1",
//           dark: "#0b365d",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
//


// New tails wind
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1d4ed8",       // your primary blue
        "brand-dark": "#1e40af" // darker blue
      },

      /* 👇 Add animations here */
        willChange: {
          auto: "auto",
          scroll: "scroll-position",
          contents: "contents",
          opacity: "opacity",
          transform: "transform",
        },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
