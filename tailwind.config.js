/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=garden]"],
          //"base-content": "black",
          primary: "#0AAE2E",
          accent: "#FF9F1C",
        },
      },
      {
        luxury: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],

          primary: "#0AAE2E",
          accent: "#FF9F1C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  theme: {},
};
