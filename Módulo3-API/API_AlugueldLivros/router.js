const express = require('express');
const { postBook } = require('./book/postBook.js');
const { listBook } = require('./book/listBook.js');
const { updateBook } = require('./book/updateBook.js');
const { removeBook } = require('./book/removeBook.js');
const { postAluno } = require('./aluno/postAluno.js');
const { listAluno } = require('./aluno/listAluno.js');
const { updateAluno } = require('./aluno/updateAluno.js');
const router = express.Router();

router.post('/livro',postBook)
router.get('/livros',listBook)
router.put('/livro/:id',updateBook)
router.delete('/livro/:id',removeBook)

router.post('/estudante',postAluno)
router.get('/estudantes',listAluno)
router.put('/estudante/:matricula',updateAluno)

module.exports = router;