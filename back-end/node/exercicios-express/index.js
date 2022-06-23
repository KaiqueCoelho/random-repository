const { default: axios } = require('axios');
const express = require('express');

const app = express();
app.use(express.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
  const emailValidation = emailRegex.test(email);
  if (username.length < 4) return res.status(400).json({ "message": "invalid data" })
  if (!emailValidation) return res.status(400).json({ "message": "invalid data" })
  const passwordCheck = Number(password)
  if (password.length < 4 || password.length > 8 || !passwordCheck) return res.status(400).json({ "message": "invalid data" })
  return res.status(200).json({message: 'user created'});
})

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
  const emailValidation = emailRegex.test(email);
  const token = Math.floor(Math.random() * 999999999999);
  const passwordCheck = Number(password)
  if (!emailValidation) return res.status(400).json({ "message": "email or password is incorrect" })
  if (password.length < 4 || password.length > 8 || !passwordCheck) return res.status(400).json({ "message": "email or password is incorrect" })
  return res.status(200).json({ token })
})

app.get('/btc/price', async (req, res) => {
  const { token } = req.headers;
  const validation = token.length === 12;
  if (!validation) return res.status(401).json({ "message": "invalid token" })
  try {
    const request = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    res.status(200).json(request.data.bpi)    
  } catch (error) {
    res.status(400).json(error);
  }

})

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});