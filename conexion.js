const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test');

mongoose.connect('mongodb://127.0.0.1:27017/pruebacrudForm');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a  MongoDB')});
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')});

module.exports = mongoose

