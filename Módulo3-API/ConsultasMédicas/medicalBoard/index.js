const express = require('express');
const router = express.Router();

const postDoctor = require('./postDoctor');

router.post('/doctor', postDoctor);

module.exports = router;