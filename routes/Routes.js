const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserControllers');
const taskController = require('../controllers/TaskControllers');
// all routes comes here in the route folder;
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/Users', userController.getAllIntern);
router.post('/task', taskController.createTask);
router.get('/gettask', taskController.getTask);

module.exports = router;