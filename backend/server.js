var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');


require('dotenv').config();

var app = express();

app.use(cors());
app.use(express.json());

var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
var connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB connected');
})

app.listen(3000);
 