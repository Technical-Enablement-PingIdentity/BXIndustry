const { addBeforeLoader, loaderByName } = require("@craco/craco");
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Styles': path.resolve(__dirname, 'src/assets/scss'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
      '@Helpers': path.resolve(__dirname, 'src/helpers'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
    },
    configure: function (webpackConfig) {
      const fragLoader = {
        test: /\.html$/i,
        use: ['raw-loader']
      };

      addBeforeLoader(webpackConfig, loaderByName("file-loader"), fragLoader);

      return webpackConfig;
    }
  },

};