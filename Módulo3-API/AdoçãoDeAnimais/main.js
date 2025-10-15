const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.port;


const inicializing = async() => {
    try {
        await mongoose.connect(process.env.database);
        console.log("Connecting to databank...");

        mongoose.connection.on('error',(err) => {
            console.log("Something went wrong trying to connect to databank.")
        })

        app.use(express.json())
        app.use(router);

        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`)
        })

    } catch (err) {
        console.error(`Error trying to connect to MongoDB. Error: ${err.message}`);
        process.exit(1);
    }
}

inicializing();
console.log(new Date);