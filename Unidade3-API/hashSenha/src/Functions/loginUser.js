import { RegisterUserMGS } from "../src/Schemas/SchemaRegister.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export async function loginUser(req, res){
  try {
    const { Email, Senha } = req.body;
    const user = await RegisterUserMGS.findOne({ Email });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const validSenha = await bcrypt.compare(Senha, user.Senha);
    if (!validSenha) return res.status(401).json({ error: 'Senha incorreta' });

    const secret = process.env.jwstoken
    const token = jwt.sign({ userId: user._id, role: user.Role }, secret, { expiresIn: '1h' });


    res.json({ message: 'Login realizado com sucesso!', token });
  } catch (error) {
    console.log(error)
    return res.status(500).send("deu merda")
  }
  
}