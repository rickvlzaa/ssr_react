const nodeExternals = require('webpack-node-externals');
const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
    context: path.resolve(__dirname, '../../'),
    entry: {
        server: './src/server/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../build'),
        publicPath: ''
    },
    node: {
        __dirname: true,
        __filename: true
    },
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.jsx']
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new DotEnv()
    ]
}