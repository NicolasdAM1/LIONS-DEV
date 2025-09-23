const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes.js')

app.use(express.json());
app.use(router)

console.log(new Date());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

