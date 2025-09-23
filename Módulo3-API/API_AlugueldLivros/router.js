const express = require('express');
const { postBook } = require('./book/postBook.js');
const { listBook } = require('./book/listBook.js');
const { updateBook } = require('./book/updateBook.js');
const { removeBook } = require('./book/removeBook.js');
const { postAluno } = require('./aluno/postAluno.js');
const { listAluno } = require('./aluno/listAluno.js');
const { updateAluno } = require('./aluno/updateAluno.js');
const { removeAluno } = require('./aluno/removeAluno.js');
const { postAluguel } = require('./aluguel/postAluguel.js');
const { listAluguel } = require('./aluguel/listAluguel.js');
const { updateAluguel } = require('./aluguel/updateAluguel.js');
const { removeAluguel } = require('./aluguel/removeAluguel.js');

const router = express.Router();

router.post('/livro',postBook)
router.get('/livros',listBook)
router.put('/livro/:id',updateBook)
router.delete('/livro/:id',removeBook)

router.post('/estudante',postAluno)
router.get('/estudantes',listAluno)
router.put('/estudante/:matricula',updateAluno)
router.delete('/estudante/:matricula',removeAluno)

router.post('/aluguel',postAluguel)
router.get('/alugueis',listAluguel)
router.put('/aluguel/:id',updateAluguel)
router.delete('/aluguel/:id',removeAluguel)

module.exports = router;