//traerme express
const express = require('express');
const users = require('./database/data.json');
const path = require('path');

//crear una istancia de express
const app = express();

//crear una ruta por GET
//app.get(direccion de recurso) y una funcion de cb
//toda ruta recibe dos parametros request (req) y response (res)
//por req vienen "variables" desde el front (navegador)
//por res --> se responde lo que se quier devolver al usuario
app.get('/',(req,res)=>{
    res.send('Hola mundo desde express');
});

app.get('/user', (req,res) => {
    res.send({
        status:'bad request',
        message: 'No existe este recurso'
    });
});

app.get('/users', (req,res) => {
    res.send({
        status:'OK',
        data: users
    });
});

app.get('/index', (erq,res) => {
    res.sendFile(path.join(__dirname,'./html/index.html'));
    //res.sendFile(index.html);
});

app.get('/contacto', (req,res) => {
    res.sendFile(path.join(__dirname,'./html/contacto.html'));
});
//levantar el servidor
app.listen(3001, () =>{
    console.log('Servidor escuchando en puerto 3001');
});