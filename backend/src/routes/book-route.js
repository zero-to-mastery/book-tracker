import express from 'express';
import books from '../controllers/bookcontroller';

const router = express.Router();

router.post('/books', books.addBook);

export default router;