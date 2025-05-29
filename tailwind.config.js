/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#FAF9F6',
        pink: '#FFD6E0',
        blue: '#A9C8E9',
        yellow: '#FFE7B6',
        text: '#6B5E57',
      },
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [],
}
