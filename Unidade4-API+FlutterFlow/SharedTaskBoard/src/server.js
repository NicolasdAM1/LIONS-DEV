import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import { route } from './Routes/routes.js';

const app = express();
const port = process.env.PORT || 3000;

import cors from 'cors';

app.use(express.json());
app.use(cors());
app.use(route);

const inicializing = async() => {
    try {
        mongoose.connection.on('error', (err) => {
            console.error(`Unsuccessfully connecting MongoDB: ${err.message}`);
        })
        await mongoose.connect(process.env.DBC);
        console.log('Successfully connected at MongoDB.');
        

        app.listen(port, () => {
            console.log(`Servidor iniciado na porta ${port}`)
        })
    } catch (err) {
        console.error("Error trying to connect MongoDB.")
        console.error(err.message);
        process.exit(1);
    }
}

inicializing();

