const express = require(`express`)
const router = express.Router()// use .router when making new routes
const places = require(`../models/places.js`)


router.get(`/new`, (req, res) => {
    res.render(`places/new`)
})

// GET /places
router.get('/', (req, res) => {
    res.render('../views/places/index', { places })
})
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/place')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {// if the route is not a number render error404
      res.render('error404')
    }else if (!places[id]){//if the index does not exist render error404
        res.render(`error404`)
    }else {
      res.render('places/show', {place: places[id], id})
    }
  })
router.delete(`/:id`, (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.render(`error404`)
    }
    else if(!places[id]){
        res.render(`error404`)
    }
    else{
        places.splice(id, 1)
        res.redirect(`/place`)
    }
})


  

module.exports = router // this will make sure we can use /locations path