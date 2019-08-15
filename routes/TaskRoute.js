const taskController = require('../controllers/TaskControllers');
const express = require('express');
const router = express.Router();

router.post('/task',taskController.createTask);

module.exports = router;