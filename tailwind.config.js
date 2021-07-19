module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#231075",
        scondary: "#08ffa2",
        primarybg: "#061437",
        clientbg: "#213058",
        btn: "#230677",
        btnbg: "#08ffa2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
