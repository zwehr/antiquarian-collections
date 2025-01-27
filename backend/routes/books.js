const express = require('express');
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', getBooks);

// GET a single books
router.get('/:id', getBook);

// POST a book
router.post('/', createBook);

// DELETE a book
router.delete('/:id', deleteBook);

// UPDATE a book
router.patch('/:id', updateBook);

module.exports = router;
