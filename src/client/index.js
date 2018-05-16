import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ConfigureStore from './store';
import App from './App';


const store = ConfigureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;

render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('react-root'));