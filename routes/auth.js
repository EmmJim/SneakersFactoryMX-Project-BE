const {Router} = require('express');
const router = Router();

//Controllers
const { login } = require('../controllers/authController');

router.post('/login', login);

module.exports = router;