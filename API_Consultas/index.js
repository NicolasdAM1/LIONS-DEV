const express = require('express');
const app = express();
const deckRouter = require('./medicalBoard');
const port = 3000;

app.use(express.json());
app.use(deckRouter);

console.log(new Date());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});