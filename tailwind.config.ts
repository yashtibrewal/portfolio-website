import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'my-blue': '#17183B',
        'my-yellow': '#F4E04D',
        'my-blue-2': "#004385",
        'my-voilet': '#9984D4',
        'my-voilet-2': '#CAA8F5'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
