const { addQuantity } = require("./modules/addQuantity.js");
const { createProduct } = require("./modules/createProduct.js");
const express = require ('express');
const { history } = require("./modules/history.js");

const router = express.Router();

router.post('/produtos',createProduct);
router.post('/produto',addQuantity);
router.get('/produtos/historico',history);


module.exports = router;