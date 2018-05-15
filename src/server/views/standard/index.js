
export default (html, helmet, initialState) => {
    return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.base.toString()}
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="react-root">
                ${html}
            </div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')};
            </script>
            <script src="/vendor.bundle.js" type="text/javascript"></script>
            <script src="/app.bundle.js" type="text/javascript"></script>
        </body>
    </html>
    `;
}