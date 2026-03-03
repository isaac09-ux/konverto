/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        lime: {
          500: '#BFFF00',
          dark: '#8FBF00',
        },
        dark: {
          900: '#0A0A0A',
          800: '#141414',
          700: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};
