const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv/config');

const routes = require('./routes');

const server = express();
server.use(cors());

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true
}).then( () =>{
    console.log('> Database conected');
});

server.use(express.json());
server.use(routes);

server.listen(3333);