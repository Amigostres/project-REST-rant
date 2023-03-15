const React = require(`react`)
const Default = require(`./default`)

function error404() {
    return (
        <Default>
            <main>
                <h1>404: Page is not here</h1>
                <p>Sorry, we don't have this page</p>
            </main>
        </Default>
    )
}

module.exports = error404