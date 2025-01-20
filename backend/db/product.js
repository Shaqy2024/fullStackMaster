const mongoose = require ('mongoose');

 
const productSchema = new mongoose.Schema({

    name :String,
    prise :String,
    category :String,
    userId :String,
    company :String
  

});

module.exports = mongoose.model("Product" , productSchema);
