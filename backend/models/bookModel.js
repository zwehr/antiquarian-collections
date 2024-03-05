const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    binding: {
      type: String,
      required: true,
    },
    provenance: {
      type: String,
    },
    purchaseYear: {
      type: Number,
      required: true,
    },
    purchasedFrom: {
      type: String,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
