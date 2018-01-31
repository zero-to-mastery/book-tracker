const User = require('../models/User');

const validateUser = async (req, res, next) => {
   try {
      if (req.user) {
         const user = await User.findOne({ googleID: req.user.googleID });
         if (user) {
            next()
         }
      } else {
         res.redirect('/');
      }
   } catch (e) {
      console.log(e)
   }
}
module.exports = validateUser;