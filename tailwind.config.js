/** @type {import('tailwindcss').Config} */
import orbitger from 'orbital-ledger';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [orbitger],
};
