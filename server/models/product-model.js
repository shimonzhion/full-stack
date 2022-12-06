const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  productName: { 
   type: String, required: true 
},
company:{
  type:String
},
img:{
  type:String
},
  price: {
    type: Number, required: true 
   },
  productNumber: { 
   type: Number, required: true 
},
});

module.exports = mongoose.model("product", Product);
