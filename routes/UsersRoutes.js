const express = require('express');
const router = express.Router();
const userController  = require('../controllers/UserControllers');

router.post('/signup', userController.signup);

 router.post('/login' ,userController.login);

 router.get('/Users' ,userController.getAllIntern);


module.exports = router;