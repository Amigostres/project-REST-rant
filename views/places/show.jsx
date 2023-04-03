const React = require('react')
const Default = require('../default')

function show(data) {
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>

                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} className="img-max"/>
                    </div>

                    <div className='col-sm-3'>
                        <h3>ratings</h3>
                        <h3>Description</h3>

                        <div>
                            <a href={`/place/${data.id}/edit`} className="btn btn-warning"> Edit </a>
                            <form action={`/place/${data.id}?_method=DELETE`} method="POST">
                                <button type="submit" className='btn btn-danger'>DELETE</button>
                            </form>
                        </div>

                    </div>
                </div>
                <h4>Comments</h4>
            </main>
        </Default>
    )
}

module.exports = show
