const mongoose = require("mongoose");
const { Schema } = mongoose;

const rfpSchema = new Schema({
  itemName: String,
  itemDesc: String,
  quantity: Number,
  lastDate: Date,
  maxPrice: String,
  minPrice: String,
  vendor: {
    type: Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
});

const RFP = mongoose.model("RFP", rfpSchema);

module.exports = RFP;
