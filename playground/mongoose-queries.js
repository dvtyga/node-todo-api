const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// id for user
var id = "5ae89f490c82e03ffd1f7dfc";

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// id for todo
// var id = "5ae8ca683c126d6d82e8081911";

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));

// Challenge part
User.findById(id).then((user) => {
  if (!user) {
    return console.log('user id not found...');
  }
  console.log('User by Id', user);
}).catch((e) => console.log('something went wrong'));