require('dotenv').config();

const express = require('express');
const bookRoutes = require('./routes/books');

const app = express();

// Middleware, currently just logging request path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/books', bookRoutes);

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
