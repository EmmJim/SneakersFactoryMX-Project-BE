const {Router} = require('express');
const router = Router();

//Controllers
const { getUser, createUser, updateUser } = require('../controllers/userController');

router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;