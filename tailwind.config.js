/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        first: {
          DEFAULT: "#ABDF3A",
          light: "#D9FD8B",
          alt: "#A3D733",
          dark: "#9DD02F",
          gray: "#A5A99E",
        },
        title: {
          DEFAULT: "#FAFAFA",
          black: "#1D2020",
        },
        base: {
          DEFAULT: "#B5BABA",
          light: "#A2A9A9",
          body: "#121717",
        },
      },
      height: {
        nav: "var(--header-height)",
      },
      fontFamily: {
        kaushan: ["Kaushan Script"],
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
