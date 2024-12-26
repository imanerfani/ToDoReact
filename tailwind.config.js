/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 3-48-auto-48 column grid
        '3-48-auto-32': '48px auto 32px',
        // Simple 4-48-auto-48-48 column grid
        '4-48-auto-32-48': '48px auto 32px 48px',

      }
    },
  },
  plugins: [],
}

