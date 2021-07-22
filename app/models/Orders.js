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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  shippingAddressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  order_status: {
    type: String,
    enum: [
      "Ordered",
      "Packaged",
      "Dispacthed",
      "Delivered",
      "Return Request",
      "Return Request accepted",
      "Return Request declined",
      "Returned",
      "Exchange Requested",
      "Exchange Request Accepted",
      "Exchange Request Cancelled",
      "Exchanged",
      "Completed",
      "Cancelled",
    ],
  },
  discountApplied: {
    type: Number,
  },

  createdAt: {
    type: Date,
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
