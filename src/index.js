import express from 'express';
import config from '../config/config.js';
import  userRoutes  from './routes/user.js';

import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

//Middleware
/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());
app.use('/api/v1/', userRoutes);

//Route
app.get("/api", (req, res) => {
    res.send("Hola mundo");
});

//Conexion
/* Connecting to the database. */
mongoose.connect(config)
.then(() => console.log("Conexion exitosa"))
.catch((error) => console.error(error));


/* Listening to the port 3000. */
app.listen(port, ()=> {
    console.log("Corriendo sin problemas")
})

