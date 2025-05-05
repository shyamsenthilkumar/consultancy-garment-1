const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    created: { type: String, required: true },
    status: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    quantity: { type: Number, required: true },
    city: { type: String, required: false },
    authorID:{ type: String, required: false },
    author:{ type: String, required: false },
  },
  {
    versionKey: false,
  }
);
const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
