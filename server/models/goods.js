const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  'productId': String,
  'productName': String,
  'salePrice': Number,
  'productImage': String,
  'checked':String,
  'productNum':Number
});

module.exports = mongoose.model('Good',productSchema);
