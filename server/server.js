var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

// activate body-parser middleware
app.use(bodyParser.json());

// POST: /todos
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.state(400).send(e);
  });

  // console.log(req.body);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});