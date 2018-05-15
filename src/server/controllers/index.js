import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import standardTemplate from '../views/standard';

export function sendAppPage(Component, store) {
    return (req, res) => {
        const context = {};
        const { url : location } = req;

        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={location}>
                    <Component/>
                </StaticRouter>
            </Provider>
        );

        const finalState = store.getState();
        const helmet = Helmet.renderStatic();

        res.status(200).send(standardTemplate(markup, helmet, finalState));
    };
}