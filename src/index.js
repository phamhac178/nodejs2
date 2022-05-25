
const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./router')
const db = require('../config/db/index');
const sessions = require('express-session');

app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());

app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  resave: false ,

}));

// connect to db
db.connect();

//HTTP logger
// app.use(morgan('combined'))

//Teamplate engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'ejs');



//chạy routes
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})