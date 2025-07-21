// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-red': 'linear-gradient(to right, #fecaca, #fca5a5, #f87171)', // red-100 → red-200 → red-300
      },
    },
  },
  plugins: [],
}
