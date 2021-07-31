//aca van todas las rutas que de las users

const {Router} = require('express');
const router = Router();
const {getUser, createUser, updateUser, deleteUser, getOneUser} = require('../controlers/users.controlers');

router.route('/')
    .get(getUser)
    .post(createUser)

router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;