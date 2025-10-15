const express = require('express')
const { createPet } = require('./Modules/createPet.js')
const router = express.Router()

router.post('/pets', createPet)

module.exports = router