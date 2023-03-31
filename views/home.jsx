const React = require(`react`)
const Default = require(`./default`)

function home() {
    return(
        <Default>
            <main className='text-center'>
                <h1>HOMES PAGE!</h1>
                <br />
                <div className="text-center">
                    <img src="/images/pancakes.avif" alt="Pancakes" />
                </div>
            </main>
        </Default>
    )
}

module.exports = home // this is for the res.render(`home`) so that we don't need to get the directory
