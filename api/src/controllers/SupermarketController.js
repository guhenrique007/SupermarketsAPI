const Supermarket = require('../models/Supermarket');

module.exports = {

    //listar mercados
    async index(req, res){
        const markets = await Supermarket.find();
        console.log('Exibindo resultados da pesquisa: ' + markets);
        return  res.json(markets);
    },

    test(req,res){
        console.log({ ok:true });
        return res.json(req.body.ok);
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
            superMarketMainImage: req.body.superMarketMainImage,
            superMarketAdditionalImages: "",
            superMarketLocation:{
                street: req.body.superMarketLocation.street,
                number: req.body.superMarketLocation.number,
                district: req.body.superMarketLocation.district,
                zip: req.body.superMarketLocation.zip,
                country: req.body.superMarketLocation.country,
                city: req.body.superMarketLocation.city,
                state: req.body.superMarketLocation.state
            }, 
            superMarketDescription: req.body.superMarketDescription,
	        superMarketPhone: req.body.superMarketPhone
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
                superMarketName: req.body.superMarketName,
                superMarketMainImage: req.body.superMarketMainImage,
                superMarketDescription: req.body.superMarketDescription,
                superMarketAdditionalImages: req.body.superMarketAdditionalImages,
                superMarketLocation:{
                    street: req.body.superMarketLocation.street,
                    number: req.body.superMarketLocation.number,
                    district: req.body.superMarketLocation.district,
                    zip: req.body.superMarketLocation.zip,
                    country: req.body.superMarketLocation.country,
                    city: req.body.superMarketLocation.city,
                    state: req.body.superMarketLocation.state
                },
                superMarketDescription: req.body.superMarketDescription,
	            superMarketPhone: req.body.superMarketPhone
            }
        });

        console.log('Mercado editado');
        return res.json(updateMarket);
    }
}


