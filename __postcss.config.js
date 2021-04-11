module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.js", "./public/**/*.html"],
      css: ["./src/**/*.css"],
      output: "public/",
    },
  },
};
