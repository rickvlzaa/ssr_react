import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';
import APIroutes from '../api/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

if(process.env.NODE_ENV === 'development' && process.env.DEV_SERVER_PORT) {
    app.use('/api', cors({options: `http://localhost:${process.env.DEV_SERVER_PORT}`}), APIroutes);
} else {
    app.use('/api', APIroutes);
}

app.use('/', routes);

app.listen(process.env.SERVER_PORT, err => {
    let message = err ? 'Oops something went wrong when starting server' : `Web Application running on port ${process.env.SERVER_PORT}`;
    console.log(message);
});