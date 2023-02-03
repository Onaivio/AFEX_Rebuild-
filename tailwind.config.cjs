/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redBrown: '#B55B52',
        blue: '#6AD2FF',
        lightRed: 'rgba(181, 91, 82, 0.15)',
        lightGray: '#DBDBDB',
        brightRed: '#FF7B6D',
        inherit: 'inherit',
        mainBlack: '#181818',
        dashBlack: '#1E1E1E',
        gray: '#E7E7E7',
        darkNav: 'rgba(255, 255, 255, 0.08)',
        borderLine: 'rgba(255, 255, 255, 0.5)',
        borderLight: 'rgba(26, 26, 26, 0.5)',
        btn: 'rgba(255, 255, 255, 0.1)',
        lightIcon: 'rgba(181, 91, 82, 0.15)',
        rule: 'rgba(26, 26, 26, 0.1)',
        ruleDark: 'rgba(255, 255, 255, 0.08)',
        darkIcon: 'rgba(255, 255, 255, 0.15)',
        activeIcon: 'rgba(255, 255, 255, 0.12)',
        iconDark: '#262424',
        cardDark: '#C7584D'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}