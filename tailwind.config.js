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
          gray: {
            DEFAULT: "#A5A99E",
            950: "#191F1E",
            900: "#212625",
            800: "#2F3432",
            750: "#363B39",
            700: "#3F4340",
            600: "#4D524D",
            500: "#6A6E68",
            400: "#797E76",
            300: "#81857C",
            200: "#888C83",
            100: "#979A91",
            50: "#9EA197",
          },
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
        redHat: ["Red Hat Display"],
      },
    },
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};



