const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

// listen for requests
app.listen(4000, () => {
  console.log('listening on port 4000');
});
