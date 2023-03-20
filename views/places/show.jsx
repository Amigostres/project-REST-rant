const React = require('react')
const Default = require('../default')

function show (data) {
    return (
        <Default>
          <main>
            <h1>{data.place.name}</h1>
            <a href={`/place/${data.id}/edit`} className="btn btn-warning"> Edit </a> 
            <form action={`/place/${data.id}?_method=DELETE`} method="POST">
              <button type="submit" className='btn btn-danger'>DELETE</button>
            </form>

          </main>
        </Default>
    )
}

module.exports = show
