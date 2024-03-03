/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
