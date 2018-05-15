const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, '../../build', 'public'),
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
       new CleanWebpackPlugin(['build/public/*.*'], {
           root: path.resolve(__dirname, '../../')
       }),
       new webpack.HashedModuleIdsPlugin(),
       new ManifestPlugin({
           basePath: '/',
           fileName: '../manifest.json'
       })
    ]
});
