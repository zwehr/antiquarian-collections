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

  // if the :id doesn't match Mongoose possible types
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
const deleteBook = async (req, res) => {
  const { id } = req.params;

  // if :id doesn't match Mongoose possible types
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  // if :id format is okay but book isn't found
  if (!book) {
    return res.status(400).json({ error: 'No such book' });
  }
  res.status(200).json(workout);
};

// update a book
const updateBook = async (req, res) => {
  const { id } = req.params;

  // if :id doesn't match Mongoose possible types
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  const book = await Book.findOneAndUpdate({ _id: id }, { ...req.body });

  // if :id format is okay but book isn't found
  if (!book) {
    return res.status(400).json({ error: 'No such book' });
  }

  res.status(200).json(book);
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
