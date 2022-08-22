const express = require ('express');
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUsuario = new schema({
    carne: String,
    nombre: String,
    direccion:String,
    telefono:String,
    idusuario:String,
    genero: String,
    cumpleaños: String,
    carrera: String,
    inscripcion: Date,
})

const ModeloUsuario = mongoose.model('usuarios', schemaUsuario);

module.exports = router 

//Agregar usuarios
router.post('/agregarusuario', (req, res)=> {
    const nuevousuario = new ModeloUsuario({
        carne: req.body.carne,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        idusuario:req.body.idusuario,
        genero: req.body.genero,
        cumpleaños: req.body.cumpleaños,
        carrera: req.body.carrera,
        inscripcion: req.body.inscripcion, 
    })
    nuevousuario.save(function(err){
        if (!err){
            res.send('Usuario agregado correctamente' + nuevousuario)
        }else{
            res.send(err)
        }
        
    })
    
})

router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function(docs,err){
        if (!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})



    
 
    
