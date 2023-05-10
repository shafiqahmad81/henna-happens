/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#383533',
          30: 'rgba(65, 60, 59, 0.3)',
          3: 'rgba(0, 0, 0, 0.2)',
          55: 'rgba(0, 0, 0, 0.55)',
          button: '#0F0F0F'
        },
        light: '#413C3B',
        olive: '#A1BD74',
        disabled: '#CDCDCD',
        gray:'#D9D9D9',
        white:{
          DEFAULT: '#ffffff',
          7: 'rgba(255, 255, 255, 0.7)',
        }
      },
      letterSpacing: {
        3: '-.03em',
      },
      fontSize: {
        h1: '5rem',  // 80px
        h1sm: '2.188rem', // 35px
        h2: '3.75rem', // 60px
        h2sm: '1.875rem', // 30px
        h4: '2.5rem', //40px
      },
      fontFamily: {
        'montserrat': '"Montserrat", sans-serif',
        'cinzel': '"Cinzel", serif',
        'cormorant': '"Cormorant", serif',
        'bodoni': '"Bodoni Moda", serif',
      },
      spacing: {
        '30': '7.5rem',//120px
      },
    },
  },
  plugins: [],
}
