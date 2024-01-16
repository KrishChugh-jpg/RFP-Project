const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  categoryName: String,
  isActive: Number,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
