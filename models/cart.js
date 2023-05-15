const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    items: [
        {  
            product: {
                name: String,
                price: Number,
                quantity: Number,
            }
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);