const express = require(`express`)
const router = express.Router()// use .router when making new routes


router.get(`/new`, (req, res) => {
    res.render(`places/new`, {})
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      },
       {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('../views/places/index', {places})
  })


  

module.exports = router // this will make sure we can use /locations path