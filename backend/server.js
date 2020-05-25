var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');


require('dotenv').config();

var app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//CONNECT DB
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
var connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB connected');
})


//Routes Folder
var exerciseRouter = require('./routes/exercises');
var userRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter); 
app.listen(3000);
 