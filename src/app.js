//traerme express
const express = require('express');

//crear una istancia de express
const app = express();

//crear una ruta por GET
app.get('/',(req,res)=>{
    res.send('Hola mundo desde express');
})


//levantar el servidor
app.listen(3001, () =>{
    console.log('Servidor escuchando en puerto 3001');
});