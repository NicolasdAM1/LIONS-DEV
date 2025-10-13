const { addQuantity } = require("./modules/addQuantity.js");
const { createProduct } = require("./modules/createProduct.js");
const express = require ('express')

const router = express.Router();

router.post('/produtos',createProduct);
router.post('/produto',addQuantity);


module.exports = router;