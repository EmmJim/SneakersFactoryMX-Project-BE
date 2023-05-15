const {Router} = require('express');
const router = Router();

//Controllers
const { getProfile, getUser, createUser, updateUser } = require('../controllers/userController');
//Middlewares
const { validateJWT } = require('../middlewares/validateJWT');

router.get('/profile',validateJWT, getProfile);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;