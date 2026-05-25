/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: {
          50:  "#f5f5f0",
          100: "#e8e6e0",
          200: "#d0cdc4",
          300: "#b0ada4",
          400: "#8e8b82",
          500: "#706e66",
          600: "#5a5850",
          700: "#48463f",
          800: "#363430",
          900: "#242320",
        },
        brand: {
          DEFAULT: "#1b3a6b",
          dark:    "#142d53",
          light:   "#2a5098",
        },
        cream: {
          DEFAULT: "#e8dcc8",
          light:   "#f5efe3",
          dark:    "#d4c9b0",
        },
        green: {
          whatsapp: "#25D366",
          dark:     "#128C7E",
        },
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        bebas:   ["'Bebas Neue'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
