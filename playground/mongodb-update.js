// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db
  //   .collection("Todos")
  //   .findOneAndUpdate({
  //     _id: new ObjectID("5ae8049c1a6d55310d7ee756")
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   })

  // challenge part
  // db
  //   .collection("Users")
  //   .findOneAndUpdate(
  //     { 
  //       _id: new ObjectID("5ae7b493811cd26978ce3713")
  //     },
  //     { 
  //       $set: {
  //         name: 'Ryu'
  //       }
  //     }, {
  //       returnOriginal: false
  //     }
  //   ).then((result) => {
  //     console.log(result);
  //   })

    // challenge part
    db.collection('Users').findOneAndUpdate({name: 'Ryu'}, {$inc: {age: 3}}, {returnOriginal: false})
      .then((result) => {
        console.log(result);
      });

  // db.close();
});