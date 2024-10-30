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
        cardPrimary: "var(--color-variant1)",
        textPrimary: "var(--neutral-1000)",
        textPrimaryVariant: "var(--neutral-800)",

        cardSecondary: "var(--color-variant2)",
        borderSecondary: "var(--neutral-0)",
        textSecondary: "var(--neutral-0)",
        textSecondaryVariant: "var(--neutral-800)",

        cardAlternate: "var(--color-variant3)",
        textAlternate: "var(--neutral-0)",
        textAlternateVariant: "var(--neutral-800)",
        
        cardDark: "var(--color-variant4)",
        borderDark: "var(--neutral-0)",
        textDark: "var(--neutral-0)",
        textDarkVariant: "var(--neutral-400)",
        buttonDark: "var(--neutral-900)",
        inputDark: "var(--neutral-900)",

        cardTransparent: "var(--color-neutral-400)",
        borderTransparent: "var(--neutral-400)",
        textTransparent: "var(--neutral-400)",
        textTransparentVariant: "var(--neutral-100)",
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