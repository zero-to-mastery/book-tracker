const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');
const validateNewUser = require('../middleware/register-validation');
const validateUser = require('../middleware/login-validation');

router.get('/reading', validateUser, async (req, res) => {
   try {
      const user = await User.findById(req.user.id);
      const booksReading = user.books.filter(book => book.status === 'reading');
      res.render('user/reading', { booksReading, books: user.books });
   } catch (e) {
      console.log(e);
      res.redirect('/user/reading');
   }
});

router.get('/read', validateUser, async (req, res) => {
   try {
      const user = await User.findById(req.user.id);
      const readBooks = user.books.filter(book => book.status === 'read');
      res.render('user/read', { readBooks , books: user.books});
   } catch (e) {
      console.log(e);
      res.redirect('/user/reading');
   }
})

router.get('/wishlist', validateUser, async (req, res) => {
      try {
            const user = await User.findById(req.user.id);
            const wishlist = user.books.filter(book => book.status === 'wishlist');
            res.render('user/wishlist', { wishlist, books: user.books });
      } catch (e) {
            console.log(e);
            res.redirect('/user/reading');
      }
});

// LOGIN FORM
router.get('/login', (req,res) => {
   res.render('user/login');
});

// POST LOGIN FORM
router.post('/login', passport.authenticate('local', {
   successRedirect: '/user/reading',
   failureRedirect: '/user/login',
   failureFlash: true,
   successFlash: true
}));

// LOGOUT
router.get('/logout', (req, res) => {
      req.logOut();
      res.locals.user = null;
      req.flash('success_msg', 'Successfully logged out');
      res.redirect('/');
});

// REGISTER FORM
router.get('/register', (req,res) => {
   res.render('user/register');
})

// POST REGISTER FORM
router.post('/register', validateNewUser, (req, res) => {
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
   })
   bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
         if (err) throw err;
         newUser.password = hash;
         newUser.save()
            .then(user => {
               req.flash('success_msg', 'Successfully registered.  Please login');
               res.redirect('/user/login');
            })
            .catch(e => {
               req.flash('error_msg', 'Unable to register as new user');
               console.log(e);
               res.redirect('user/register');
            })
      })
   })
});

module.exports = router;