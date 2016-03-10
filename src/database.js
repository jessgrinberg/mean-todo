'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean-todo', function(err) {
  if(err) {
    console.log('Failed connecting Mongodb');
  } else {
    console.log('Successfully connected to Mongo!');
  }
});
