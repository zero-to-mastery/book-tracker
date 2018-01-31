const User = require('../models/User');
const mongoose = require('mongoose');

const validateNewUser = async (req, res, next) => {
   console.log(req.body);
   const errors = [];
   const user = {
      email: req.body.email,
      name: req.body.name,
   }
   try {
      const registeredUser = await User.findOne({ email: req.body.email })
      if (registeredUser) {
         errors.push({ text: 'Email already registered' })
      }
      if (req.body.password !== req.body.confirm) {
         erros.push({ text: 'Passwords must match' })
      }
      if (errors.length > 0) {
         res.render('user/register', { errors, user });
      } else {
         next();
      }
   } catch (e) {
      throw e
   }
}

module.exports = validateNewUser