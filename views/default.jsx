const React = require(`react`)





function Default (html) {
    return(
        <html>
            <head>
                <title>My titles</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </head>

            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default