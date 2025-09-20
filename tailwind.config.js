/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          light: '#A48ABF',
          DEFAULT: '#4A2F6C',
          dark: '#301E46',
        },
        'brand-gold': {
          light: '#FDEBC8',
          DEFAULT: '#E6C384',
          dark: '#B89C6A',
        },
      },
      fontFamily: {
        'sans': ['"Inter"', 'sans-serif'],
        'serif': ['"Lora"', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand-purple.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand-purple.dark'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.brand-purple.light'),
              '&:hover': {
                color: theme('colors.brand-gold.light'),
              },
            },
            h1: { color: theme('colors.brand-gold.light') },
            h2: { color: theme('colors.brand-gold.light') },
            h3: { color: theme('colors.gray.200') },
            h4: { color: theme('colors.gray.300') },
            strong: { color: theme('colors.gray.200') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
