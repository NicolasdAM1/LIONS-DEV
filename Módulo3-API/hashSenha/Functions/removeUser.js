const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
import { RegisterUserMGS } from "../Schemas/SchemaRegister";

export async function RemoveUser(req, res) {
    try {
        const { id } = req.params;
        const { Senha } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("ID inválido.");
        }
        if (!Senha) {
            return res.status(400).send("A senha é necessária para deletar a conta.");
        }
        
        const user = await RegisterUserMGS.findById(id);
        if (!user) {
            return res.status(404).send("Usuário não encontrado.");
        }
        
        const senhaCorreta = await bcrypt.compare(Senha, user.Senha);
        if (!senhaCorreta) {
            return res.status(401).send("Senha incorreta.")
        }
        
        await RegisterUserMGS.findByIdAndDelete(id);
        return res.status(200).send("Usuário deletado.")
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return res.status(500).send('Erro interno.')
    }
}