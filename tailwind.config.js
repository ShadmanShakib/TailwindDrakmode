module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#231075",
        scondary: "#08ffa2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
