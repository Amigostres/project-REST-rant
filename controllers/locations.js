const router = require(`express`).Router()// use .router when making new routes

router.get(`/`, (req, res) => {
    res.send(`<h1 style = 
        "color:blue;
        text-align:center;
        ">
        LOCATIONS!!!
        </h1>`)
})

module.exports = router // this will make sure we can use /locations path