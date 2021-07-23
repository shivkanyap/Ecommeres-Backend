const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  regular_price: {
    type: Number,
    required: true,
  },
  sell_price: {
    type: Number,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  quantity: {
    type: Number,
  },
  status_active: {
    type: Boolean,
    default: true,
  },
  enableReviews: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
