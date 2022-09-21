/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {
        25: ".25",
        175: "1.75",
      },
      blur: {
        xs: "2px",
        s: "3px",
      },
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "90px",
      },
      maxWidth: {
        xxs: "425px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
    },
  },
  plugins: [],
};
