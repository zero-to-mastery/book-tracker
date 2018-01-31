const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   if(req.user) {
      res.redirect('/user/reading');
   } else {
      res.render('index/welcome');
   }
})

// router.post('/login',)

router.get('/about', (req, res) => {
   res.render('index/about');
})

module.exports = router;