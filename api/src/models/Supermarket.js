const {Schema, model} = require('mongoose');

const SupermarketSchema = new Schema({
    superMarketName:{
        type: String,
        required: true,
    },
    superMarketMainImage:String,
    superMarketAdditionalImages: [String],
    superMarketLocation:{
        "street": String,
		"number": String,
		"district": String,
		"zip": String,
		"country": String,
		"city": String,
		"state": String
    },
    superMarketDescription: String,
	superMarketPhone: String,
}, {
    timestamps: true,
});

module.exports = model('Supermarket', SupermarketSchema);