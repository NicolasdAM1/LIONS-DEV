const express = require('express');
const router = express.Router();

function postDoctor(req, res) {
    if (!validateDoctor(req)) {
        return res.status(400).send('Dados do médico incompleto.');
    }

    const newDoctor = {
        crm: req.body.crm,
        doctorName: req.body.doctorName,
        specialty: req.body.specialty,
    };
    

    res.status(201).send(newDoctor);
    medicalBoard.push(newDoctor);
}

function validateDoctor(req) {
    if (!req.body || !req.body.crm || !req.body.doctorName || !req.body.specialty) {
        return false;
    }
    return true;
}

router.post('/doctor', postDoctor);

module.exports = router;
