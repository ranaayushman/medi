/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/bg.png')",
        "hero-dark": "url('/img/bg-dark.png')",
        "bg-rect": "url('/img/bg-rect.png')",
      },
      colors: {
        "main-colour": "#076194",
        "button-color": "#90CCED",
      },
    },
  },
  plugins: [],
};
