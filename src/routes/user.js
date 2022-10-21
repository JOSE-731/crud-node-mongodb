const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

//Creando usuarios
router.post('/users', (req, res) => {
    //Con la siguiente linea crearemos un usuario con la estructura de datos definidas en el modelo
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//Obtener todos los usuarios:
router.get('/users', (req, res) => {
    //Con la siguiente linea crearemos un usuario con la estructura de datos definidas en el modelo
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//Acceder a un solo usuario
router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    //Con la siguiente linea crearemos un usuario con la estructura de datos definidas en el modelo
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

module.exports = router;