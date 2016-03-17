var express = require('express');
var toDoList = require('./routes/toDoList');
var app = express();
app.use('/todolist',toDoList);