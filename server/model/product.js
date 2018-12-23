const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  units: { type: Number },
  photo: { type: String}
}, { collection : 'product' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
