var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  created_at: Date,
  updated_at: Date
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
