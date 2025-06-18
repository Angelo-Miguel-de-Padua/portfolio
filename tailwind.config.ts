import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        primaryLight: "var(--color-primary-light)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        google: ["Google Sans", "Arial", "Helvetica", "sans-serif"],
        oxygen: ["Oxygen", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;