const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserControllers');
const taskController = require('../controllers/TaskControllers');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/Users', userController.getAllIntern);
router.post('/task', taskController.createTask);
router.post('/gettask', taskController.getTask);

module.exports = router;