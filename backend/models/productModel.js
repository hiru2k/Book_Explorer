const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },

    author: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timesstamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
