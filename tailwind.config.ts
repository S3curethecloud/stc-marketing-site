import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        stc: {
          ink: "#07111f",
          navy: "#0b1220",
          panel: "#111827",
          line: "#243244",
          cyan: "#38bdf8",
          blue: "#2563eb",
          mint: "#22c55e",
          text: "#e5eefb",
          muted: "#94a3b8"
        }
      },
      maxWidth: {
        "site": "1200px"
      }
    }
  },
  plugins: []
};

export default config;
