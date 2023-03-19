const React = require(`react`)
const Default = require(`./default`)

function home() {
    return(
        <Default>
            <main>
                <h1>HOMESSS PAGE! LOL</h1>
            </main>
        </Default>
    )
}

module.exports = home // this is for the res.render(`home`) so that we don't need to get the directory
