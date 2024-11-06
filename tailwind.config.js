
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#ff8901',
        secondary:'#fb923c'
      },
      container:{
        center: true,
        padding:{
          DEFAULT : '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        },
        height: {
          '500': '500px',
        },
  

      }
    },
    fontFamily: {
      // signature: ["Great Vibes"],
      montserrat: ['Montserrat', 'sans-serif'],

    },
  },
  plugins: [],
};
