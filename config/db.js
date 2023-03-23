const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/shoppingmern', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })  

        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('There was an error trying to connect to DB')
    } 
}

module.exports = {
    dbConnection
}