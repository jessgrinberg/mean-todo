'use strict';

var express = require('express');
var Todo = require('../models/todo');

var router = express.Router();

router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos){
    if(err) {
      //do something
      return res.status(500).json({message: err.message});
    }
    res.json({todos: todos});
  });
});

router.post('/todos', function (req, res) {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
      res.json({'todo': todo, message: 'Todo created'});
  })
});



//TODO: Add PUT route to update existing entries

//TODO: Add DELETE route to delete entries

module.exports = router;
