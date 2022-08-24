const express = require('express');

const app = express();

const archivoBD = require('./conexion')

const rutausuario = require('./rutas/usuario');


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario', rutausuario);

app.get('/', (req,res)=>{
    res.end('Bienvenidos al servidor Backend Node.js Corriendo...')
})

app.listen(4000, function(){
    console.log('El Servidor Node está corriendo correctamente');
})

/* 
const PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log('El Servidor Node está corriendo correctamente', PORT);
})
*/ 