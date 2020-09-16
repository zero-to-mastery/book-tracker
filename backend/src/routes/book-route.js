import express from 'express';
import controller from '../controllers/books.controller';

const router = express.Router();

router.post('/books', controller.addBook);
router.get('/books', controller.getAllBooks);
router.get('/books/:bookId', controller.getOneBook);
router.patch('/books/:bookId', controller.updateBook);
router.delete('/books/:bookId', controller.deleteBook);

export default router;