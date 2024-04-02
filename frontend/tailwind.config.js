module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', 
        '810': '810px',
      },
      boxShadow: {
        'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        // Add more custom fonts here
        OpenSans: ['"Open Sans"', 'Arial', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Lato: ['"Lato"', 'Helvetica', 'Arial', 'sans-serif'],
        Raleway: ['"Raleway"', 'Arial', 'sans-serif'],
        Oswald: ['"Oswald"', 'sans-serif'],
        PlayfairDisplay: ['"Playfair Display"', 'serif'],
        SourceSansPro: ['"Source Sans Pro"', 'Helvetica', 'Arial', 'sans-serif'],
        Merriweather: ['"Merriweather"', 'serif'],
        Nunito: ['"Nunito"', 'sans-serif'],
        PTSans: ['"PT Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
