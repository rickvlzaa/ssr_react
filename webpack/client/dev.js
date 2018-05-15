const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge.strategy({'entry.app': 'prepend'})(base, {
    entry: {
        app: ['webpack-hot-middleware/client']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../src/client/dev/build'),
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/dev/server/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
