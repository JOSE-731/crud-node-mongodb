import express from 'express';
import config from '../config/config.js';
import userRoutes from './routes/user.js';

import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

//Middleware
/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());
app.use('/api/v1/', userRoutes);

app.use((req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

console.log(__dirname)


/* This is a middleware that is executed when the route is not found. */
/*app.use((req, res, next) =>{
    res.status(404).json({
        message: "Ruta no encontrada"
    })
})*/

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
app.listen(port, () => {
    console.log("Corriendo sin problemas")
})

