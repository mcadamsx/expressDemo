const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controller')

router.get('/users',usersControllers.getAllUsers)
router.post('/users', usersControllers.createUsers)
router.get('/users/:id', usersControllers.getUserById)
router.put('/users/:id', usersControllers.updateUsers)
router.delete('/users/:id', usersControllers.deleteUsers)

module.exports = router