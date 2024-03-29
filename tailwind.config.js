/** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './sections/**/*.{js,ts,jsx,tsx,mdx,css}',
    './styles/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    function ({ addUtilities }) {
      addUtilities({
        '.padding_x': {
          '@apply px-8 sm:px-16': {},
        },
        '.padding_y': {
          '@apply py-8 sm:pb-8 sm:pt-20': {},
        }
        // ...
      })
    }
  ],
}
