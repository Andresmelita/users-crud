//* Dependencias
const router = require('express').Router()

//* Importación de archivos
const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postUser)

router.delete('/users/:id', userServices.deleteUserById)
router.put('/users/:id', userServices.putUserById)
router.get('/users/:id', userServices.getUserById)

module.exports = router