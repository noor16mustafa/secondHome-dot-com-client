/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          neutral: "#1F2937",

          "base-100": "#FFFFFF",
          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
          emerald: "#d1fae5",
        },
      }
    ]
  },
  theme: {
    extend: {},

  },
  plugins: [require("daisyui")],
}
