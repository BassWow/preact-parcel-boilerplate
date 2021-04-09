module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "**/*.html",
        "**/*.css",
        "**/*.js",
      ],
    },
    autoprefixer: {},
    cssnano: { preset: "default" },
  },
};
