const express = require('exporess');
const webpack = require('webpack');
const config = require('../../../../webpack.config')('client', 'dev');
const compiler = webpack(config);

const app = express();

app.listen(process.env.DEV_SERVER_PORT, err => {
    if(!err) {
        console.log(`Development server is running on port ${process.env.DEV_SERVER_PORT}`);
    } else {
        console.log('Oops something went wrong with the development server');
    }
})