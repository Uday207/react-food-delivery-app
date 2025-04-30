const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimizer = [
        new TerserPlugin({
          parallel: false, // Prevents Netlify memory crash
          terserOptions: {
            compress: {
              drop_console: true, // Optional: removes console.log
            },
          },
        }),
      ];
      return webpackConfig;
    },
  },
};
