/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-cream": "#fffdf3",
        customGreen: "#e8fde1", // Nama warna bisa disesuaikan
      },
    },
  },
  plugins: [],
};
