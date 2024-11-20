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
        primary: '#FF6B2F'
      },
      boxShadow: {
        'text': '0px 0px 6px rgba(0, 0, 0, 0.35)',
      }
    }
  },
  plugins: [],
} satisfies Config;
