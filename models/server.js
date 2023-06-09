const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../config/db');

class Server {

    constructor(){
        this.app = express();
        this.port = 4000;

        this.paths = {
            auth: '/api/auth',
            user: '/api/users',
        }

        //Connect to DB
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.user, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

module.exports = Server;