/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover-intro': "url('/images/intro_cover.jpg')",
        'cover-image': "url('/images/cover.jpg')",
        'cover-albums': "url('/images/albums_cover.jpg')",
        'cover-merch': "url('/images/merch_cover.jpg')",
      },
      
      animation: {
        'bounce-slow': '2s bounce   infinite ease-in ',
      }
      
    },
  },
  plugins: [],
};
