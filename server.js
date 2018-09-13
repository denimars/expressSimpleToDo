const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');

mongose.Promise = global.Promise;
mongose.connect('mongodb://localhost/Tododb',{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const routes = require('./api/routes/todoListRoutes');
routes(app)

app.listen(port, ()=>{
  console.log('testing on port'+port);
})