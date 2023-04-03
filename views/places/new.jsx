const React = require(`react`)
const Default = require(`../default`)

function newForm (){
    return(
        <Default>
            <main>
                <h1>Let's add a new place</h1>
                <form method="POST" action="/place">
                    <div className="form-group">
                        <label htmlFor="name">Place name</label>
                        <input className="form-control" type="text" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="State">State</label>
                        <input className="form-control" type="text" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Cuisines">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                    
                
                </form>
            </main>
        </Default>
    )
}
module.exports = newForm