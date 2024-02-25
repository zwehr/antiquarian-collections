const express = require('express');
const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
} = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', getBooks);

// GET a single book
router.get('/:id', getBook);

// POST a new book
router.post('/', createBook);

// DELETE a book
router.delete('/:id', deleteBook);

// UPDATE a new book
router.patch('/:id', updateBook);

module.exports = router;
