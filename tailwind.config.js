/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Use 'class' instead of 'media' for JS-controlled dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define colors for easy access in components
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
      },
      backgroundColor: {
        card: 'var(--card-bg)',
      },
      boxShadow: {
        card: '0 4px 6px var(--card-shadow)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      },
    },
  },
  plugins: [],
};