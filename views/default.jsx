const React = require(`react`)


function Default (html) {
    return(
        <html>
            <head>
                <title>My titles</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
                <link rel='stylesheet' href="/style.css" />
            </head>

            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/place">Places</a></li>
                        <li><a href="/place/new">Add Places</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default