const { createProduct } = require("./modules/createProduct.js");
const express = require ('express')

const router = express.Router();

router.post('/produtos',createProduct);


module.exports = router;