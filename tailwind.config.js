/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
       md: '768px',
       lg: '976px',
       xl: '1440px'
},
extend: {
  colors:{
    yellow: 'hsl(47, 88%, 63%)',
    White: 'hsl(0, 0%, 100%)',
    grey: 'hsl(0, 0%, 50%)',
    black: 'hsl(0, 0%, 7%)'
  },
  fontFamily: {
    'figtree': ['Figtree', 'sans-serif'],
  },

  fontSize: {
    '16px': '16px',
  },
 },
  },
plugins: [],
}

