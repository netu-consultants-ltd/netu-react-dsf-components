// var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const path = require('path');
module.exports = {
  //...
  resolve: {
    alias: {
      '@netu-react-dsf-components': path.resolve(__dirname, '../src/components'),
      '~/': './src',
    },
  },
  // plugins: [new TsConfigPathsPlugin()],
};
