const mongoose = require("mongoose");
const { Schema } = mongoose;

const rfpSchema = new Schema({
  _id:{
    type:Schema.Types.ObjectId,
    required:true,
  },
  category:{
    type:String,
    ref:'Category',
    required:true
  },
  itemName: String,
  itemDesc: String,
  quantity: Number,
  lastDate: Date,
  maxPrice: String,
  minPrice: String,
  isActive:Number,
  vendor: {
    type: Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
},{strict:false});

const RFP = mongoose.model("RFP", rfpSchema);

module.exports = RFP;
