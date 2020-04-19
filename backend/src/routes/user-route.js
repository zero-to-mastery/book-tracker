import express from 'express';
import User from '../controllers/user.controller';
const router = express.Router();

router.post('/signup', User.signUp);
router.post('/login', User.login);

export default router;
