module.exports = {
  configureWebpack: {
    module: {
      rules: [{ test: /\.pdf$/, use: "file-loader" }],
    },
  },
};
