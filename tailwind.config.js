module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      source : ["Inter"]
    },
    extend: {
      colors : {
        "Bgnavbar": "#1E1F2B",
        "signupColor": "#1BC27C",
        "lbColor": "#2260DA"
      }
    },
  },
  plugins: [],
}
