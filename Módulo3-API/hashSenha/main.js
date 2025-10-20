require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./Src/Routes/routes.js");

const app = express();
const port = process.env.PORT;

const inicializing = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB com sucesso.");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o MongoDB: ${err.message}`);
    });

    app.use(express.json());
    app.use(rotas);

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