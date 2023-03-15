const React = require(`react`)





function Default (html) {
    return(
        <html>
            <head>
                <title>My titles</title>
            </head>

            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default