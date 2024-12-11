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

        background: "#2B2B2B",
        first: "#1C1C1C",
        second: "#53595F",
        third: "#D8C9B7",
        fourth: "#6B70C8",
        fifth: "#E1B12E", 
        sixth: "#444444",
        "0": "#EEEEEE",
        "100": "#DADADA",
        "200": "#C6C6C6",
        "300": "#B3B3B3",
        "400": "#9F9F9F",
        "500": "#8B8B8B",
        "600": "#777777",
        "700": "#646464",
        "800": "#505050",
        "900": "#4A4A4A",
        "1000": "#2F2F2F",
      },
      fontFamily: {
        // heading: "'Hanken Grotesk', sans-serif",
        // body: "'Josefin Sans', sans-serif",
        heading: "'DepartureMono', sans-serif",
        body: "'DepartureMono', sans-serif",
        exp: "'DepartureMono', sans-serif",
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
      fontSize: {
        heading: ['1.5rem', '2rem'],
        body: ['1rem', '1.5rem'],
        exp: ['0.75rem', '1rem'],
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