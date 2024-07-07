import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
        "trivio-50":"#C3D2DA",
        "trivio-100": "#a5daf9",
        "trivio-200":"#C4D0E8",
        "trivio-400": "#6b89c5"
     }
    },
  },
  plugins: [],
};
export default config;
