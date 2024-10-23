const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUserData = require('../middleware/validator');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/user', validateUserData, userController.createUser);
router.put('/user/:id', validateUserData, userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;