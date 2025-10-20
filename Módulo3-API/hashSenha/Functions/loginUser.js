import { SchemaRegister } from "../Schemas/SchemaRegister"
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export async function loginUser(req, res){
  const { email, password } = req.body;

  const user = await SchemaRegister.findOne({ email });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ userId: user._id }, 'acess token', { expiresIn: '1h' });

  res.json({ message: 'Login realizado com sucesso!', token });
}