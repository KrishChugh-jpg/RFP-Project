const mongoose = require("mongoose");
const { Schema } = mongoose;

const quotesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  vendor: {type:String,ref:'Vendor'},
  itemDesc: String,
  itemQuantity: Number,
  totalCost: Number,
  category: {type:String,ref:'Category'},
  rfp:{
    type:String,
    required:true,
    ref:'RFP'
  },
  isActive:Number
});

const Quotes = mongoose.model("Quotes", quotesSchema);

module.exports = Quotes;
