/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Darkest blue (main navbar and footer)
          light: '#1E293B',   // Slightly lighter variant
          dark: '#0A192F',    // Even darker if you want deeper contrast
        },
        secondary: {
          DEFAULT: '#E2E8F0', // Light gray for backgrounds
          light: '#F8FAFC',   // Almost white
          dark: '#CBD5E1',    // Mid-tone gray-blue for cards
        },
        accent: {
          DEFAULT: '#F97316', // Bright orange
          light: '#FB923C',   // Lighter hover
          dark: '#EA580C',    // Darker pressed
        },
        overlay: {
          dark: 'rgba(15,23,42,0.8)',   // dark overlay using primary-dark
          light: 'rgba(15,23,42,0.2)',
        },
        white: '#ffffff',
        black: '#000000',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}
