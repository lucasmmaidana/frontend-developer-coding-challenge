module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: "1920px",
      tablet: "1024x",
      mobile: "375px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        neutrals: {
          100: "#F5F9FF",
          200: "#E6EDF7",
          300: "#DAE4F2",
          500: "#8FA3BF",
          600: "#7C899C",
          900: "#252F3D",
        },
        brand: {
          light: "#E5F0FF",
          light2: "#CCE1FF",
          gradient: {
            default: {
              blue: "#176FEB",
              pink: "#FF80FF",
            },
            hover: {
              blue: "#1667D9",
              pink: "#F279F2",
            },
          },
        },
        green: {
          light: "#CCFFE3",
          default: "#29CC74",
        },
        red: {
          light: "#FFDFD9",
          default: "#E07F4F",
        },
      },
    },
  },
  plugins: [],
};
