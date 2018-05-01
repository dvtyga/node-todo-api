var mongoose = require('mongoose');

// challenge part: create user model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

// // challenge part: create new user
// var newUser = new User({
//   email: 'batman@dccomics.org'
// });

// // challenge part: save that new user
// newUser.save().then((doc) => {
//   console.log('saved user: ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user');
// });

module.exports = { User };