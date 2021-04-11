const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ["./public/**/*.html", "./src/**/*.js"],
  },

  darkMode: "media",
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
        inter: ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
