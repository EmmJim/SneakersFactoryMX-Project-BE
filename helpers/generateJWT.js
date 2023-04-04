const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {

        const payload = {uid};

        jwt.sign(payload, "supersecreta", {
            expiresIn: '4h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('We could not generate token');
            } else {
                resolve(token);
            }
        })

    }) 
}

module.exports = {
    generateJWT
}