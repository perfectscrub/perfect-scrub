/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'workSans': ["Work Sans"],
        'plexSerif': ["IBM Plex Serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        89: "22.25rem",
      },
      borderWidth: {
        3: "3px",
        14: "14px",
        18: "18px",
      },
      width: {
        '97': '388px',
        '98': '392px',
        '99': '396px',
        '100': '400px',
        mc: "max-content",
      },
      height: {
        '97': '388px',
        '98': '392px',
        '99': '396px',
        '100': '400px'
      },
    },
  },
  plugins: [],
}

