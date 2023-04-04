const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const { generateJWT } = require('../helpers/generateJWT');

const login = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                msg: 'Usuario no existe'
            })
        }

        const passwordCorrect = bcryptjs.compareSync(password, user.password);

        if(!passwordCorrect){
            return res.status(400).json({
                msg: 'Credenciales no válidas'
            })
        }

        const token = await generateJWT(user._id);

        res.status(200).json({
            user, 
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Algo salió mal, intenta de nuevo'
        })
    }
}

module.exports = {
    login
}