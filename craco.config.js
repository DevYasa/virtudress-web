const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      });
      
      // Ignore source-map-loader for @mediapipe packages
      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/@mediapipe/,
          /node_modules\/(?!@mediapipe).+/,
        ],
      });

      return webpackConfig;
    }
  },
};
