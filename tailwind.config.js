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
        cardFirst: "var(--color-variant1)",
        textFirst: "var(--text-1000)",
        textFirstVariant: "var(--text-700)",
        borderFirst: "var(--text-300)",

        cardSecond: "var(--color-variant2)",
        textSecond: "var(--text-1000)",
        textSecondVariant: "var(--text-800)",
        borderSecond: "var(--text-700)",

        cardThird: "var(--color-variant3)",
        textThird: "var(--text-0)",
        textThirdVariant: "var(--text-300)",
        inputThird: "var(--text-700)",
        placeholderThird: "var(--text-300)",
        buttonThird: "var(--text-1000)",
        borderThird: "var(--text-1000)",
        
        cardFourth: "var(--color-variant4)",
        textFourth: "var(--text-1000)",
        textFourthVariant: "var(--text-1000)",
        borderFourth: "var(--text-1000)",

        cardFifth: "var(--color-variant5)",
        borderFifth: "var(--neutral-700)",
        textFifth: "var(--neutral-100)",
        textFifthVariant: "var(--neutral-300)",

      },
      fontFamily: {
        heading: "'Hanken Grotesk', sans-serif",
        body: "'Josefin Sans', sans-serif",
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