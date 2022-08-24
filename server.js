const express = require('express');

const app = express();

//Importar Conexión MongoDB

const archivoBD = require('./conexion')

//Importacion de archivo Rutas y Modelos

const rutausuario = require('./rutas/usuario');

//Importacion de Body Parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario', rutausuario);

app.get('/', (req,res)=>{
    res.end('Bienvenidos al servidor Backend Node.js Corriendo...')
})
//Configurar server básico

const PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log('El Servidor Node está corriendo correctamente', PORT);
})