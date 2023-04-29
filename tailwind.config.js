/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height: {
        mobileImg: "32rem", // adjust the value to your desired height
        desktopImg: "52rem",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
