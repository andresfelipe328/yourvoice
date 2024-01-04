import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FADBA3",
        "text-color": "#34545F",
        "btn-color": "#F5F6F1",
        "btn-effect-color": "#798A4F",
      },
      boxShadow: {
        xs: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        s: "rgba(117, 101, 76, 0.12) 0px 1px 3px, rgba(117, 101, 76, 0.24) 0px 1px 2px",
        m: "rgba(32, 50, 93, 0.15) 0px 6px 12px -2px, rgba(32, 50, 93, 0.2) 0px 3px 7px -3px",
        l: "rgba(117, 101, 76, 0.25) 0px 13px 27px -5px, rgba(117, 101, 76, 0.3) 0px 8px 16px -8px",
      },
      screens: {
        navLinks: "700px",
      },
      backgroundImage: {
        bg: "linear-gradient(to left top, #fadba3, #f4e4b6, #f1ebca, #f1f1de, #f5f6f1)",
      },
    },
  },
  plugins: [],
};
export default config;
