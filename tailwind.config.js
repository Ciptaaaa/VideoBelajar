/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-cream": "#fffdf3",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
