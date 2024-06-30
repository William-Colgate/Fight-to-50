/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "Monaco", "Courier New", "monospace"],
        custom: ["YourCustomFont", "sans-serif"],
        digital: ["Digital", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        dancingScript: ["Dancing Script", "cursive"],
        indieFlower: ["Indie Flower", "cursive"],
        lobster: ["Lobster", "cursive"],
        anton: ["Anton", "sans-serif"],
        monda: ["Monda", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        // Add more sizes as needed
      },
      width: {
        128: "32rem", // You can add more custom values here
        144: "36rem",
        160: "40rem",
      },
      borderRadius: {
        "xl-4": "1rem", // Equivalent to rounded-xl in default config
        "xl-16": "4rem",
        "xl-6": "1.5rem",
        "xl-7": "1.75rem",
        "xl-8": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
