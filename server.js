// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// const connectionString = 'mongodb://127.0.0.1:27017/neu-so';
const connectionString = 'mongodb://admin:admin123@ds139896.mlab.com:39896/heroku_fgj1gbk0';
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/neu-stackoverflow')));
app.use(express.static(path.join(__dirname, 'src/assets')));
//
// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const cookieParser = require('cookie-parser');
const session      = require('express-session');
const passport = require('passport');

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());





const port = process.env.PORT || '3200';
app.set('port', port);

require('./assignment/app')(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/neu-stackoverflow/index.html'));
});


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));





// //my api list
// app.get('/api/user/123', findUserById);
// function findUserById (req,res) {
//   res.status(200).send("Find a user!");
// }





