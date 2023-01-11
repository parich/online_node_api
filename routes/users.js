const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
//http://localhost:3000/users/
router.get('/', userController.index);

//http://localhost:3000/users/login
router.get('/login',userController.login );

module.exports = router;
