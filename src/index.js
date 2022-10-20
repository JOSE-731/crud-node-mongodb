const expreess = require('express');
const mongoose = require('mongoose');
const config = require('../config/config')
const app = expreess();
require('dotenv').config();

const port = process.env.PORT || 3000;

//Route
app.get("/api", (req, res) => {
    res.send("Hola mundo");
});

//Conexion
mongoose.connect(config)
.then(() => console.log("Conexion exitosa"))
.catch((error) => console.error(error));


app.listen(port, ()=> {
    console.log("Corriendo sin problemas")
})

