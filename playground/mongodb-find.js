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

  db
    .collection("Users")
    .find({name: 'Peter'})
    .toArray()
    // .count()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2))
    });
    // .then((count) => {
      // console.log(`Users count: ${count}`);
      // console.log("Todos");
      // console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
      // console.log("Unable to fetch todos", err);
    // });

  // db.close();
});