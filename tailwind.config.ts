import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
        'teal-bg': "url('/images/teal-bg.jpg')",
        'demo-bg': "url('/images/demo.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
