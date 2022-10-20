const expreess = require('express');
const app = expreess();
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log("Corriendo sin problemas")
})

