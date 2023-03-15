const express = require(`express`)
const PORT = require(`dotenv`).config()
const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use(`/place`, require(`./controllers/locations`))


app.get(`/`, (req, res) => {
    // res.send(`HELLO CLASS!!`)
    res.render(`home`)
})


app.get(`*`, (req, res) => {
    res.status(404).send(`<h1 style = "color:red;">404 PAGE</h1>`)
})


app.listen(process.env.PORT, ()=> {
    console.log(`server is live ${process.env.PORT}`);
})
