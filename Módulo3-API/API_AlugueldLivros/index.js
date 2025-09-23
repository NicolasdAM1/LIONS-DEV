const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes.js')
const mongoose = require('mongoose')
app.use(express.json());
app.use(router)

console.log(new Date());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 

mongoose.connect(
    "mongodb+srv://NicolasdAM1:<JI4Jeo1A76iNKBE1>@lions.6diz1pv.mongodb.net/?retryWrites=true&w=majority&appName=Lions"
);
mongoose.connection.once('open', () => {
    console.log("Conectando ao MongoDB");
})
mongoose.connection?.on('error', (err) => {
    console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})