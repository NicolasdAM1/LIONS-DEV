function postDoctor(req, res){
    if(!validateDoctor(req))
        return res.status(400).send('Dados do médico incompleto.');

    const newDoctor = {
        id: req.body.crm,
        doctorName: req.body.doctorName,
        specialty: req.body.specialty,
    }
}

function validateDoctor(req){
    if(!req.body || !req.body.crm || !req.body.doctorName || !req.body.specialty)
        return false;
    return true;
}