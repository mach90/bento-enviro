export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        colorBackground: "#c1babd",
        colorBrand: "#f6c355",
        colorCard1: "#ffffff",
        colorCard2: "#efedec",
        colorCard3: "#018b78",
        colorCard4: "#114640",
        colorDark: "#000000",
        colorMedium: "#999999",
        colorLight: "#ffffff",
      },
      fontFamily: {
        custom1: "'Fjalla One', sans-serif",
        custom2: "'Josefin Sans', sans-serif",
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      fontStyle: {
        italic: 'italic',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        shake: 'shake 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}