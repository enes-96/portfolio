/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height: {
        mobileImg: "29rem",
        tinyImg: "32rem", // adjust the value to your desired height
        desktopImg: "52rem",
      },
      screens: {
        custom: { max: "640px" },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
