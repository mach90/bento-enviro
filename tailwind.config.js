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
        colorBackground: "#1b1c1b",
        colorBorder: "#696a69",
        colorCard: "#1e1f1e",
        colorTextLight: "#f4f4f4",
        colorTextMedium: "#898989",
        colorAccent1: "#2d4137",
        colorAccent1t: "#2d413755",
        colorAccent2: "#8e5f3c",
        colorAccent2t: "#8e5f3c55",
        colorAccent3: "#302b46",
        colorAccent3t: "#302b4655",
        colorAccent4: "#898989",
        colorAccent4t: "#89898911",
      },
      fontFamily: {
        custom1: "'Hanken Grotesk', sans-serif",
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