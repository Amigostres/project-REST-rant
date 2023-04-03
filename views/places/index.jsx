const React = require(`react`)
const Default = require(`../default`)

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-12">
                <h2>
                    <a href={`/place/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Default>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Default>
    )
}


module.exports = index