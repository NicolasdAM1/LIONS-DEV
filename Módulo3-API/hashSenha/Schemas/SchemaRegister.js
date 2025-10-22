import mongoose from "mongoose";
export const SchemaRegister = new mongoose.Schema({
    Nome: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Senha: {
        type: String,
        required: true,
    },
})
export const RegisterUserMGS = mongoose.model("Register", SchemaRegister);
