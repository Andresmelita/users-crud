//* Importación del archivo
const usersControllers = require('./users.controllers');


const getAllUsers = (req, res) => {
    const data =  usersControllers.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.findUserById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404),json({messagge: 'Invalid ID'})
    }
}

const deleteUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.deleteUser(id)
    if (data) {
        res.status(200).json({messagge:'User deleted successfully'})
    } else {
        res.status(404),json({messagge: 'Invalid ID'})
    }
}

const putUserById = (req, res) => {
    const id = req.params.id
    const {firstName, lastName, email, password, birthday} = req.body
    if (firstName && lastName && email && password) {
        const data = usersControllers.changeUser(id, {firstName, lastName, email, password, birthday})
        res.status(201).json({messagge:'User modified successfully'})
    } else {
        res.status(400).json({
            messagge: 'Invalid Data',
            fields: {
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                password: 'string',
                birthday: 'aaaa/mm/dd'
            }
        })
    }
}

const postUser = (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body
    if (firstName && lastName && email && password) {
        const data = usersControllers.createUser({firstName, lastName, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json({
            messagge: 'Invalid Data',
            fields: {
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                password: 'string',
                birthday: 'aaaa/mm/dd'
            }
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    postUser,
    putUserById
}