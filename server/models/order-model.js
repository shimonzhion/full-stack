const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    orderNumber: {
      type: Number,
    },
    customerName: {
      type: String,
    },
    
    quantityOfProducts: { 
        type: Number
     },
    
    deliveryDate:{
      type:Date
    },    
  sum:{
    type:Number
  },
  address: {
    type:String,
   
}
}
);
module.exports = mongoose.model("order", Order);
