//* Dependencias
const express = require('express')

//* Routers
const userRouter = require('./users/users.router')

//* Configuración inicial
const port = 9010
const app = express()

//* Habilitar recepcion de formato json
app.use(express.json())

//* Para saber si la app funciona
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK'
    })
})

//* Vinculación de archivos
app.use('/v1', userRouter)

//Apartado final
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
