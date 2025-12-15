const express = require('express')
const { createPet } = require('./Modules/createPet.js')
const { listPet } = require('./Modules/listPet.js')
const router = express.Router()

router.post('/pets', createPet)
router.get('/pets', listPet)

module.exports = router