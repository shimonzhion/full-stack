const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    numberOfPages: { type: Number, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("book", BookSchema)