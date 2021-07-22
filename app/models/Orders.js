const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  billingAddressId: {
    type: String,
  },
  shippingAddressId: {
    type: String,
  },
  order_status: {
    type: String,
    enum: ['Packed','Shipped','Delivered'],
  },
  discountApplied: {
    type: Number,
  },

  createdAt: {
    type: Date(),
    default: Date.now(),
  },
  quantity: {
    type: Number,
  },
  couponAmount: {
    type: Number,
  },

  tax: {
    type: Number,
  },
  shippingCost: {
    type: Number,
  },
  
});

module.exports = mongoose.model("Order", orderSchema);
