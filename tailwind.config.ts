import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/util/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [plugin(function({ addUtilities }: { addUtilities: (utilities: Record<string, any>, variants?: string[]) => void }) {
    const newUtilities = {
      '.navbar-shadow': {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 6.3px 0 rgba(0, 0, 0, 0.15)',
      },
      '.navbar-shadow-dark': {
        boxShadow: '0 2px 4px 0 rgba(50, 50, 50, 0.3), inset 0 0 6.3px 0 rgba(50, 50, 50, 0.35)',
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  }),
],
};
export default config;