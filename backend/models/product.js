const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    imageUrl: {
      type: String,
      default: null,
    },
  },
  { versionKey: false } // Disable the __v field
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
