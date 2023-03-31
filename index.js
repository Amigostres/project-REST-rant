const express = require(`express`)
const PORT = require(`dotenv`).config()
const app = express()
const methodOverride = require(`method-override`) // https://expressjs.com/en/resources/middleware/method-override.html

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`public`))
app.use(methodOverride('_method'))//lets you use http verbs that client's browser does not let you usually use such as PUT, DELETE



app.use(`/place`, require(`./controllers/locations`))



app.get(`/`, (req, res) => {
    // res.send(`HELLO CLASS!!`)
    res.render(`home`)
})


app.get(`*`, (req, res) => {
    // res.status(404).send(`<h1 style = "color:red;">404 PAGE</h1>`)
    res.render(`error404`)
})


app.listen(process.env.PORT, ()=> {
    console.log(`server is live ${process.env.PORT}`);
})
