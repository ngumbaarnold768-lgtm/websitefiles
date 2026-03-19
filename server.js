const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/public/products.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});