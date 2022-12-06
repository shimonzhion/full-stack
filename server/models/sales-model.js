const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sale = new Schema({
    month:{type:String},
    profits:{type:Number},
})

module.exports = mongoose.model("sale", Sale)
