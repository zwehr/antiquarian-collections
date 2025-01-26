const express = require('express');
const {
  getBooks,
  getBook,
  createBook,
} = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', getBooks);

// GET a single books
router.get('/:id', getBook);

// POST a book
router.post('/', createBook);

// DELETE a book
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a book' });
});

// UPDATE a book
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a book' });
});

module.exports = router;
