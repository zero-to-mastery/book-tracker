const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');
const validateUser = require('../middleware/login-validation');

// ADD BOOK FORM
router.get('/add', validateUser, (req, res) => {
   res.render('books/add');
});

// POST ADD BOOK
router.post('/add', validateUser, async (req, res) => {
   const book = {
      title: req.body.title,
      author: req.body.author,
      status: req.body.status
   };
   try {
      const user = await User.findById(req.user.id);
      user.books.push(book);
      user.save();
      res.redirect(`/user/${req.body.status}`);
   } catch (e) {
      console.log(e);
      res.redirect('/books/add');
   }
});

// EDIT BOOK FORM
router.get('/edit/:id', validateUser, async (req, res) => {
   try {
      const user = await User.findById(req.user.id);
      const book = user.books.filter(book => book._id.toString() === req.params.id)[0];
      res.render('books/edit', {book});
   } catch (e) {
      console.log(e);
      res.redirect('/user/reading');
   }
})

// EDIT BOOK FORM
router.put('/edit/:id', validateUser, async (req, res) => {
   try {
      const user = await User.findById(req.user);
      const books = user.books.map(book => {
         if(book._id.toString() === req.params.id) {
            book.title = req.body.title,
            book.author = req.body.author,
            book.status = req.body.status
         }
         return book
      });
      user.books = books;
      await user.save();
      res.redirect(`/user/${req.body.status}`);
   } catch (e) {
      console.log(e);
      res.redirect('/user/reading');
   }
})

// DELETE BOOK
router.delete('/:id', validateUser, async (req, res) => {
   try {
      const user = await User.findById(req.user.id);
      const books = user.books.filter(book => book._id.toString() !== req.params.id);
      user.books = books;
      await user.save();
      res.redirect('/user/reading');
   } catch (e) {
      console.log(e);
      res.redirect('/user/reading');
   }
})

module.exports = router;