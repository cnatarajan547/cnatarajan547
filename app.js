const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const bcrypt = require('bcrypt')

var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())


const carSlots = require('./js/routes/carSlots');
const userRegister = require('./js/routes/userRegister');
const admin = require('./js/routes/admin')

const mongoUrl = 'mongodb://localhost:27017/Arokee';
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/', carSlots)
app.use('/', userRegister);
app.use('/', admin);

try{
     var db = mongoose.Connection
     console.log('DB Connected')
} catch(err){
    console.log('DB Connected fail')
}

const PORT = process.env.PORT || 5051
app.listen(PORT, ()=>{
    console.log(`Server is running at http:localhost:${PORT}`)
})