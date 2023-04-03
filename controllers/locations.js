const express = require(`express`)
const router = express.Router()// use .router when making new routes
// const places = require(`../models/places.js`)
const db = require(`../models`) //database.Places for the places // this comes from models/index.js 
// const { render } = require("react-dom")


router.get(`/new`, (req, res) => {
    res.render(`places/new`)
})

// GET /places
router.get('/', (req, res) => {
    db.Place.find() //.Place is from the models folder
    .then((places) =>{
        res.render(`places/index`, {places})
    })
    .catch((e) =>{
        console.log(e.message)
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(()=>{
        res.redirect(`/place`)
    })
    .catch((e) =>{
        console.log(e)
        res.render(`error404`)
    })
    
})

//edit
router.get('/:id/edit', (req, res) => {

})
//put
router.put('/:id', (req, res) => {

  })
  
  

//show page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then((place) =>{
        res.render('places/show', {place})
    }).catch((e) => {
        console.log(e);
        res.render(`error404`)
    })
})
router.delete(`/:id`, (req, res) => {// runs when the DELETE method is called

})


  

module.exports = router // this will make sure we can use /locations path