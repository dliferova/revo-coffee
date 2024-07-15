/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "30rem",
        md: "48rem",
        lg: "61rem",
        xl: "90rem",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: ["0.875rem", "0.875rem"],
        base: ["1rem", "1.5"],
        xl: ["1.25rem", "1.2"],
        "2xl": ["1.5rem", "1.75rem"],
        "3xl": ["1.875rem", "2.125rem"],
        "4xl": ["3.375rem", "4.375rem"],
      },
      fontWeight: {
        black: 900,
      },
      colors: {
        "primary-color": "#415167",
        "accent-color": "#C7A17A",
        "accent-color-lighter": "#F9F5E8",
        "dark-grey": "#151D28",
        "light-gray": "#EDF0F5",
      },
    },
  },
  plugins: [],
}
