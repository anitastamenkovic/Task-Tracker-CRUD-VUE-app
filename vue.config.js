module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://json.mapalchemy.com",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
