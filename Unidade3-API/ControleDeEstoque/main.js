require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port;
const router = require('./routes.js');
const mongoose = require('mongoose');

const initializing = async() => {
    try {
        await mongoose.connect(process.env.database);
        console.log('Connecting to databank...');

        mongoose.connection.on('error',(err) => {
            console.log('Something went wrong trying to connect to databank.')
        })

        app.use(express.json());
        app.use(router)

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });

    } catch (err) {
        console.error(`Error trying to connect to MongoDB.\nError: ${err.message}`);
        process.exit(1);
    }
}
initializing();

console.log(new Date);