require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port
const router = require('./routes.js')
const mongoose = require('mongoose')

const start = async() => {
    try {
        await mongoose.connect(process.env.databank)
        console.log("Conectado ao banco de dados.")

        mongoose.connection.on('error',(err) => {
            console.error(`Erro ao se conectar com o banco de dados. Erro: ${err.message}`)
        })

        app.use(express.json());
        app.use(router)

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        }); 

    } catch (error) {
        console.error('Falha ao se conectar com o mongoDB.')
        console.error(`Erro: ${err.message}`)
        process.exit(1)
    }
}

start();

console.log(new Date);
