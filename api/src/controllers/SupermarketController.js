const Supermarket = require('../models/Supermarket');

module.exports = {

    //listar mercados
    async index(req, res){
        const markets = await Supermarket.find();
        console.log('Exibindo resultados da pesquisa: ' + markets);
        return  res.json(markets);
    },

    //listar um mercado
    async indexOne(req,res){
        const specificMarket = await Supermarket.findById(req.params.marketId);
        console.log('Exibindo resultados da pesquisa: ' + specificMarket);
        return res.json(req.params.marketId);
    },

    //criar mercado, usa método create ou store
    async store(req,res){
        const market = await Supermarket.create({
            superMarketName: req.body.superMarketName,
            superMarketMainImage :"",
            superMarketAdditionalImages:"",
            superMarketLocation:{
                street:"",
                number:"",
                district:"",
                zip:"",
                country:"",
                city:"",
                state:""
            }, 
            superMarketDescription:"",
	        superMarketPhone:""
        });

        console.log('> Supermarket registered: ' + req.body.superMarketName);
        return  res.json(req.body);
    },

    //remove mercado
    async drop(req,res){
        const removedMarket = await Supermarket.remove({_id: req.params.marketId});
        console.log('Mercado removido');
        return res.json(removedMarket);
    },

    //edita mercado
    async edit(req,res){
        const updateMarket = await Supermarket.updateOne(
            {_id: req.params.marketId}, 
            {$set:{
                superMarketName: req.body.superMarketName
            }
        });

        console.log('Mercado editado');
        return res.json(updateMarket);
    }
}


