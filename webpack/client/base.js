const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: path.resolve(__dirname, '../../'),
    entry: {
        app: ['./src/client/index.js']
    },
    output: {
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
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
    plugins: [
       new Dotenv()
    ]
}