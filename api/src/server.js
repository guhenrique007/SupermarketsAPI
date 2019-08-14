const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://gustavo:gustavo@rest-ron9h.mongodb.net/catwalk?retryWrites=true&w=majority',{
    useNewUrlParser: true
}).then( () =>{
    console.log('> Database conected');
});

server.use(express.json());
server.use(routes);

server.listen(3333);