const Book = require('../models/bookModel');
const mongoose = require('mongoose');

// get all books
const getBooks = async (req, res) => {
  const book = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(book);
};

// get a single book
const getBook = async (req, res) => {
  const { id } = req.params;

  // if the :id doesn't match mongodb possible types
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ errror: 'No such book' });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: 'No such book' });
  }

  res.status(200).json(book);
};

// create a new book
const createBook = async (req, res) => {
  const {
    title,
    author,
    year,
    binding,
    provenance,
    purchaseYear,
    purchasedFrom,
    purchasePrice,
    currentPrice,
    notes,
  } = req.body;

  // add doc to db
  try {
    const book = await Book.create({
      title,
      author,
      year,
      binding,
      provenance,
      purchaseYear,
      purchasedFrom,
      purchasePrice,
      currentPrice,
      notes,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a book

// update a book

module.exports = {
  getBooks,
  getBook,
  createBook,
};
