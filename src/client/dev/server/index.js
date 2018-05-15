const express = require('exporess');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../../../webpack.config')('client', 'dev');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.listen(process.env.DEV_SERVER_PORT, err => {
    let message = err ? 'Oops something went wrong when starting development server' : `Development server is running on port ${process.env.DEV_SERVER_PORT}`;
    console.log(message);
})