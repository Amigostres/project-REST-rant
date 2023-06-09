const mongoose = require(`mongoose`)

const placeSchema = new mongoose.Schema({
    name: {type:String, required:true},
    pic:String,
    cuisines: {type:String, required:true},
    city: {type:String, default:`SomeTown`},
    state: {type:String, default:`USA`},
    founded:Number
})

module.exports = mongoose.model(`Location`, placeSchema);