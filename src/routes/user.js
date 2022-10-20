const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

router.post('/users', (req, res) => {
    //Con la siguiente linea crearemos un usuario con la estructura de datos definidas en el modelo
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;