const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  categoryName: String,
  isActive: Boolean,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
