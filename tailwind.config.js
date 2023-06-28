/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B498FD",
        bgColor: "#171127",
      },
      boxShadow: {
        inputShadow:
          "13.355663299560547px 17.807552337646484px 40.06698989868164px 0px #646464;",
        buttonShadow: " 0px 0px 15px 0px #91919154;",
      },
      background: {
        bgGradient: "linear-gradient(90deg, #292D32 0%, #292d3200 100%);",
      },
      fontFamily: {
        montserrat: ["Montserrat", " sans-serif"],
        agdasima: ["Agdasima", " sans-serif"],
      },
    },
  },
  plugins: [],
};
