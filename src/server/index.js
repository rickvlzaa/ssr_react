const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.encoded({extended: false}));
app.use(morgan('dev'));

app.listen(process.env.SERVER_PORT, err => {
    if(!err) {
        console.log(`Web application running on port ${process.env.SERVER_PORT}`);
    } else {
        console.log(`Oops something went wrong when starting server`);
    }
});