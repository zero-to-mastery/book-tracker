const express = require('express');
const User = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', User.signUp);
router.post('/login', User.login);

module.exports = router;
