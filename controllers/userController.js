const bcryptjs = require('bcryptjs');

//Models
const User = require('../models/user');


const getUser = async(req, res) => {
    const {id} = req.params;

    try {
        const user = await User.findById(id);
        
        if(!user){
            return res.status(400).json({
                msg: 'User not found'
            })
        }

        res.status(200).json({user});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }
}

const createUser = async(req, res) => {
    const {name, email, password, role} = req.body;

    try {
        let user; 

        if(!role){
            user = new User({
                name, email, password
            })
        } else {
            user = new User({
                name, email, password, role
            })
        }

        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        res.status(200).json({user});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }
}

const updateUser = async(req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, {
            name, email, password
        })

        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        res.status(200).json({user});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser
}