import dotenv from "dotenv";
dotenv.config();

import app from './app.js';

import express from "express";
import mongoose from "mongoose";
import { route } from "./Routes/user.routes.js";

const app = express();
const port = process.env.PORT;

const inicializing = async () => {
  try {
    await mongoose.connect(process.env.DBC);
    console.log("Conectado ao MongoDB com sucesso.");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o MongoDB: ${err.message}`);
    });

    app.use(express.json());
    app.use(route);

    app.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  } catch (err) {
    console.error(
      "Falha ao conectar ao MongoDB. O servidor não foi inicializado."
    );
    console.error(err.message);
    process.exit(1);
  }
};

inicializing();