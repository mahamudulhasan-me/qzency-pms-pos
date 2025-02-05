import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2166F0",
        border: "#E9EAEB",
      },
      boxShadow: {
        custom: "0px 2px 4px 0px rgba(45, 54, 67, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
