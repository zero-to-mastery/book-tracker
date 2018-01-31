const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   books: [{
      title: {
         type: String,
         required: true
      },
      author: {
         type: String,
         required: true
      },
      status: {
         type: String,
         required: true
      },
      dateAdded: {
         type: Date,
         default: Date.now
      }
   }]
},{timestamps: true});

module.exports = mongoose.model('users', UserSchema);
