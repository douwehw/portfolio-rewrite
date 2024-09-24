import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-light": "#F8F7FD",
        "primary-dark": "#121212",
        "navbar": "#DBDBDB",
        "navbar-dark": `#2b2b2b`,
        "15-black": "#00000026",
      },
    },
  },
  plugins: [],
};
export default config;