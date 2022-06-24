const express = require('express');
const Books = require('./models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
})

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
})

app.get('/books/search', async (req, res) => {
  const { id } = req.query;
  const books = await Books.getByAuthorId(id);
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByBookId(id);
  if (!books) return res.status(404).json({ message: "Not found" })
  return res.status(200).json(books)
})

app.post('/books', Books.validateBook, Books.createBook, (req, res) => {
  res.status(201).json({ message: 'Livro criado com sucesso' })
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});