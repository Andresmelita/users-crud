const usersDB = []
let id = 1

//* Structure
// {
//     id: 1,
//     firstName: 'Carlos',
//     lastName: 'Salazar',
//     email: 'carlos.salazar.me@usach.cl',
//     password: 'Cassette',
//     birthday: '1995/07/09'
// }

//* Elemento que trae todos los usuarios
const findAllUsers = () => {
    return usersDB
}


//* Elemento que retorna un usuario según su id
const findUserById = (id) => {
    const user = usersDB.find(item => item.id == id)
    return user
}

//* Elemento que crea un nuevo usuario en la base de datos
const createUser = (obj) => {
    const newUser = {
        id: id++,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'not specified'
    }
    usersDB.push(newUser)
    return newUser
}

//? ******************    Apartado Opcional ***********************************

//* Elemento que elimina usuario según el id
const deleteUser = (id) => {
    const userSelected = usersDB.find(item => item.id == id)
    if (userSelected) {
        const indexUser = usersDB.indexOf(userSelected)
        usersDB.splice(indexUser, 1)
        return true
    } else {
        return false
    }
}

// //* Elemento que modifica el usuario segun el id
const changeUser = (id, obj) => {
    const userSelected = usersDB.find(item => item.id == id)
    const number = parseInt(id)
    const modifiedUser = {
        id: number,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'not specified'
    }
    if (userSelected) {
        const indexUser = usersDB.indexOf(userSelected)
        usersDB.splice(indexUser, 1, modifiedUser)
        return true
    } else {
        return false
    }
}
//? **************************************************************************//

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    deleteUser,
    changeUser
}