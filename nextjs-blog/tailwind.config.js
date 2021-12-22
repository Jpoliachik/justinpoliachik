module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // Some useful comment
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ['"IBM Plex Serif"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
};
