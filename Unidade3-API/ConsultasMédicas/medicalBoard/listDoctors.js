const express = require('express');
const router = express.Router();

function listDoctors(req, res){
    if(medicalBoard.length <= 0){
        res.status(400).send('Nenhum médico adicionado');
    }
}