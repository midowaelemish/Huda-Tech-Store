module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["var(--font-amiri)", "serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
        uthmanic: ["var(--font-uthmanic)", "serif"],
      },
    },
    plugins: [],
  },
};
