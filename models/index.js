require(`dotenv`).config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
//exports a variable name   requires the placeSchema in ./places
module.exports.Place = require('./places')//this will then get used in the controllers