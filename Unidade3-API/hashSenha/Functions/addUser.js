import bcrypt from 'bcrypt'
import { RegisterUserMGS } from '../Schemas/SchemaRegister.js'


export async function AddUser(req,res) {
    try{
    const Dados = req.body
    const HashSenha = await bcrypt.hash(Dados.Senha, 12)
    
    await RegisterUserMGS.create({
        ...Dados,
        Senha: HashSenha
    })

    return res.status(200).send("Usuário criado.");
    } catch(error){
        console.error(error)
        return res.status(500).send("Erro interno. Aguarde e tente novamente.");
    }
}
