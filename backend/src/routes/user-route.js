import express from 'express';
import User from '../controllers/usercontroller';
const router = express.Router();

router.post('/register', User.register);


export default router;