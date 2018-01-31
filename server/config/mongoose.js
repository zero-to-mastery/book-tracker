const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('MongoDB Connected'))
   .catch(e => console.log(e));

module.exports =  mongoose;