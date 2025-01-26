const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

// GET all books
router.get('/', (req, res) => {
  res.json({ msg: 'GET all books' });
});

// GET a single books
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single book' });
});

// POST a book
router.post('/', async (req, res) => {
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
});

// DELETE a book
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a book' });
});

// UPDATE a book
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a book' });
});

module.exports = router;
