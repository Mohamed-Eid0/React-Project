/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'brand-900': '#0F1724',  // deep blue-grey
        'brand-700': '#1E3A5F',  // dark blue-grey
        'brand-500': '#3B82F6',  // bright accent blue
        'brand-300': '#93C5FD',  // light blue
        'muted-100': '#F3F6F9',  // light background
        'muted-300': '#D6E3F5',  // soft muted color
      },
    },
  },
  plugins: [],
}
