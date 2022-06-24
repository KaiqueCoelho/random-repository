const express = require('express');
const users = require('./models/Users')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/user', users.userValidation, users.createUser)

app.get('/user', async (req, res) => {
	const getUsers = await users.getAll();
	return res.status(200).json(getUsers);
})

app.get('/user/:id', async (req, res) => {
	const { id } = req.params;
	const getUsers = await users.getById(id);
	if (getUsers.length === 0) return res.status(404).json({ error: true, message: 'Usuário não encontrado' })
	return res.status(200).json(getUsers);
})

app.put('/user/:id', users.userValidation, users.updateUser)

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});