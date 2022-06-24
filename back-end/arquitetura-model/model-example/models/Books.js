const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT title, author_id FROM books');
  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(`SELECT * FROM model_example.books WHERE author_id = ${id}`);
  return books;
}

const getByBookId = async (id) => {
  const [books] = await connection.execute(`SELECT * FROM model_example.books WHERE id = ${id}`)
  if (books.length === 0) return null;
  return books
}

const validateBook = async (req, res, next) => {
  const { title, author_id } = req.body;
  if (!title || title.length < 3) return res.status(400).json({ message: 'Titulo inválido' })
  if (!author_id) return res.status(400).json({ message: 'Id inválido' })
  const [author] = await connection.execute(`SELECT * FROM model_example.authors WHERE id = ?`, [author_id])
  if (author.length === 0) return res.status(400).json({ message: 'Id inválido' })
  next();
}

const createBook = async (req, res, next) => {
  const { title, author_id } = req.body;
  await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id])
  next();
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  validateBook,
  createBook
};