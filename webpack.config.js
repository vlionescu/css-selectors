const { resolve } = require('path');
const webpack = require('webpack');
const createWebpackConfig = require('@pos-web/webpack-config');
const webpackMerge = require('webpack-merge');
const makeSetupServer = require('./server/makeSetupServer');

module.exports = (env) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isRemote = env === 'remote';
  const options = {
    appPath: resolve(__dirname, './src'),
    hmr: true,
    host: 'localhost',
    outputPath: resolve(__dirname, './dist'),
    packageJson: require('./package.json'),
    pluginsPath: resolve(__dirname, './plugins'),
    port: '8080',
    production: isProduction,
    protocol: 'http',
    remote: isRemote,
    title: 'Plugin Examples',
    setupServer: makeSetupServer({ isProduction, isRemote }),
  };

  const webpackConfig = createWebpackConfig(options);

  webpackConfig.externals = {
    ...webpackConfig.externals,

    // Add here all your externals which are not defined by the framework
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
      root: 'classNames',
    },
  };

  return webpackMerge(webpackConfig, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { INSTRUMENTATION_KEY: JSON.stringify(process.env.INSTRUMENTATION_KEY) },
      }),
    ],
  });
};
