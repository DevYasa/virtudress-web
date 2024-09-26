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
      webpackConfig.module.rules.forEach(rule => {
        if (rule.use && rule.use.some(use => use.loader === 'source-map-loader')) {
          rule.exclude = /node_modules\/@mediapipe/;
        }
      });

      return webpackConfig;
    }
  },
};
