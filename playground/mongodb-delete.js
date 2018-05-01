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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
    

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })


  // challenge part
  // db.collection('Users').deleteMany({name: 'Kevin'}).then((result) => {
  //   console.log(result);
  // });

  // challenge part
  db
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5ae7b48258b33269652ea6bf")}).then((result) => {
      console.log(result);
    });


  // db.close();
});