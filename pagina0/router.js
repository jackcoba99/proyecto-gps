const express = require('express');
const router = express.Router();
const UserController = require('./userController');

router.post('/registro', UserController.registrarUsuario);

module.exports = router;