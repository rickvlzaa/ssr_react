const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StatsPlugin = require('stats-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].scss'
        }),
        new StatsPlugin('stats.json', {
            chunkModules: true,
            modules: true,
            chunks: true,
            exclude: [/node_modules[\\\/]react/]
        })
    ]
});