/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'my-blue': '#17183B',
        'my-yellow': '#F4E04D',
        'my-blue-2': "#004385",
        'my-voilet': '#9984D4'
      }
    },
  },
  plugins: [],
}

// --c1: #17183B;
//   --c2: #004385;
//   --c3: #F4E04D;
//   --c4: #CAA8F5;
//   --c5: #9984D4;