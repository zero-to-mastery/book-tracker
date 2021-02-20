<<<<<<< HEAD
const express = require('express');
const controller = require('../controllers/books.controller');
=======
import express from 'express';
import controller from '../controllers/books.controller';
>>>>>>> upstream/master

const router = express.Router();

router.post('/books', controller.addBook);
router.get('/books', controller.getAllBooks);
router.get('/books/:bookId', controller.getOneBook);
router.patch('/books/:bookId', controller.updateBook);
router.delete('/books/:bookId', controller.deleteBook);

module.exports = router;
