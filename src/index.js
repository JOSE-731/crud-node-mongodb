import express from 'express';
import config from '../config/config.js';
import  userRoutes  from './routes/user.js';

import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use('/api/v1/', userRoutes);

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

