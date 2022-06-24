const connection = require('./connection');

const userValidation = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name) return res.status(400).json({ error: true, message: 'O campo "first_name" é obrigatório' })
  if (!last_name) return res.status(400).json({ error: true, message: 'O campo "last_name" é obrigatório' })
  if (!email) return res.status(400).json({ error: true, message: 'O campo "email" é obrigatório' })
  if (!password) return res.status(400).json({ error: true, message: 'O campo "password" é obrigatório' })
  if (password.toString().length < 6) return res.status(400).json({
     error: true, 
     message: 'O campo "password" deve ter no minimo 6 caracteres' 
    })
  next();
}

const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  await connection.execute('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);', [first_name, last_name, email, password]);
  const [id] = await connection.execute('SELECT id FROM users WHERE email = ? AND password = ?;', [email, password]);
  return res.status(201).json({ id: id[0].id, first_name, last_name, email });
}

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users;')
  return users;
}

const getById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM users WHERE id = ?;', [id]);
  return users;
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  const idValidation = await getById(id);
  if (idValidation.length === 0) return res.status(404).json({ error: true, message: 'Usuário não encontrado' })
  await connection.execute('UPDATE model_example.users SET first_name = ?, last_name = ?, email = ?, `password` = ? WHERE id = ?;',
  [first_name, last_name, email, password, id]
  )
  return res.status(200).json({ id, first_name, last_name, email })
}

module.exports = {
  userValidation,
  createUser,
  getAll,
  getById,
  updateUser
}