
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        greenColor: "#1a523d",
        greenIsh: "#6bc22e",
        greyIsh: "#a6a6a6",
        textColor: "#fafffc",
        btnColor: "#6BC22E"
      },
    },
  },
  // plugins: [
  //   require("flowbite/plugin")({
  //     charts: true,
  //   }),
  // ]
};
