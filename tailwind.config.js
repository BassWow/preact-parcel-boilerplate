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
  fontFamily: {
    quicksand: ["Quicksand"],
  },
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
