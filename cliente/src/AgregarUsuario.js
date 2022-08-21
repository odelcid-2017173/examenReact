import React, {useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarUsuario(){

    //Hooks 
    const[carne, setCarne] = useState('')
    const[nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [genero, setGenero] = useState('')
    const [cumpleaños, setCumpleaños] = useState('')


    function agregarUsuario(){

        var usuario = {
            carne: carne,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            idusuario: uniqid(),
            genero: genero,
            cumpleaños: cumpleaños,
        }
        console.log(usuario)
        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            //alert(res.data)
            Swal.fire('Agregar usuario', 'El usuario fue agregado')
        })
        .then(err => {console.log(err)})
    }


    return(
       <div className="container">

           <div className="row">
               <div className="col-sm-6 offset-3">
                    <h2 className="mt-4">Crear un nuevo usuario</h2>
               </div>
               <div className="col-sm-6 offset-3">
               <div className="mb-3">
                        <label htmlFor="carne" className="form-label" >Carne</label>
                        <input type="text" className="form-control" value={carne} onChange={(e)=>{setCarne(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Dirección</label>
                        <input type="email" className="form-control" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Género</label>
                        <input type="text" className="form-control" value={genero} onChange={(e)=>{setGenero(e.target.value)}}></input>    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Cumpleaños</label>
                        <input type="date" placeholder='DD/MM/AAAA' min="2005-08-21" className="form-control" value={cumpleaños} onChange={(e)=>{setCumpleaños(e.target.value)}}></input>    
                    </div>  


                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
               </div>
           </div>
          
       </div> 
    )
}

export default AgregarUsuario