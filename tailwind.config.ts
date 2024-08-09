import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.05em'
    },
    extend: {
      fontFamily: {
        "chak_pet_display": ["Chakra Petch"],
        "anton_display": ["Anton"],
        "roboto": ["Roboto"],
      },
      colors: {
        "base": "#EDF1D6",
        "primary": "#609966",
        "accent": "#40513B",
      },
    },
  },
  plugins: [],
};
export default config;
