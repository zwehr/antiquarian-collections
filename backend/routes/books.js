const express = require('express');

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
router.post('/', (req, res) => {
  res.json({ msg: 'POST a new book' });
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
