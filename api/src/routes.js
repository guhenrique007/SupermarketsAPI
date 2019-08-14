const express = require('express');
const SupermaketController = require('./controllers/SupermarketController');

const routes = express.Router();


//list supermarket
routes.get('/supermarkets', SupermaketController.index);

//get specific supermarket
routes.get('/supermarkets/:marketId', SupermaketController.indexOne);

//register supermarket
routes.post('/supermarkets', SupermaketController.store);

//update supermarket
routes.patch('/supermarkets/:marketId', SupermaketController.edit);

//remove supermarket
routes.delete('/supermarkets/:marketId', SupermaketController.drop)



module.exports = routes;