const mongoose = require("mongoose");
const { Schema } = mongoose;

const vendorSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  vendorName: String,
  vendorItemDesc: String,
  vendorItemQuantity: Number,
  vendorTotalCost: Number,
  vendorCategory: String,
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
