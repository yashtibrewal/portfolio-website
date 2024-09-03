
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-blue': '#17183B',
        'my-yellow': '#F4E04D',
        'my-blue-2': "#004385",
        'my-voilet': '#9984D4',
        'my-voilet-2': '#CAA8F5'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
