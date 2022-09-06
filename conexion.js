const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oscar:123@cluster0.yc81wlp.mongodb.net/Formulario?retryWrites=true&w=majority');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a  MongoDB')});
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')});


module.exports = mongoose

