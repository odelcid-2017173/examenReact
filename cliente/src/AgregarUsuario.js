import React, {useState} from 'react'
import './App.css';
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
    const [carrera, setCarrera] = useState('')

    const results = validatePoesy(carne)
    const errorMessageCarne = validate(carne)
    const errorGenero = validateGener(genero)

    function agregarUsuario(){

        var usuario = {
            carne: carne,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            idusuario: uniqid(),
            genero: genero,
            cumpleaños: cumpleaños,
            carrera: carrera,
            inscripcion: new Date(),
            results:results

        }
        console.log(usuario)
        axios.post('https://primer-servidor-1.herokuapp.com/api/usuario/agregarusuario', usuario)
        .then(res => {
            //alert(res.data)
            Swal.fire('resultados: ' + results )
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
                        <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                        <input type="text" placeholder='Oscar Delcid...' className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Dirección</label>
                        <input type="text" placeholder='Zona 1 de mixco...' className="form-control" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" placeholder='12345678' pattern="[0-9]{8}" required className="form-control" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>    
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Género</label>
                        <input type="text" placeholder='Masculino' className="form-control" value={genero} onChange={(e)=>{setGenero(e.target.value)}}></input>
                        <p className="error">{errorGenero}</p>   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Cumpleaños</label>
                        <input type="date" placeholder='MM/DD/AAAA' max="2005-08-21" className="form-control" value={cumpleaños} onChange={(e)=>{setCumpleaños(e.target.value)}}></input>    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="carrera" className="form-label">Carrera</label>
                        <input type="text" placeholder='Carrera...' className="form-control" value={carrera} onChange={(e)=>{setCarrera(e.target.value)}}></input>    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="carne" className="form-label" >Carne</label>
                        <input type="text" className="form-control" placeholder='A1533' value={carne} onChange={(e)=>{setCarne(e.target.value)}}></input>    
                    </div> 
                    <p className="error" >{errorMessageCarne}</p>
                    <div>
                    <button onClick={agregarUsuario} han className="btn btn-success">Guardar Usuario</button>
                    </div>
                    
               </div>
           </div>
          
       </div> 
    )
};
const validate = (carne) =>{ 
    if (
        
        carne.charAt(0) !== "A" ||
        carne.charAt(2) !== "5" ||
        carne.charAt() === "0" ||
        (carne.charAt(4) !== "1" &&
          carne.charAt(4) !== "3" &&
          carne.charAt(4) !== "9")
        
      )
        return 'Invalid Credentials';
      else if (carne.length < 5) {
        return 'Minimum 5 characters';
      } else if (carne.length > 5) {
        return 'Maximum 5 characters';
      };

}

const validatePoesy = (carne) =>{
    if (carne.charAt(4) === "1") {

        return ('Your poetry genre is Drama ') ;
      }
      if (carne.charAt(4) === "3") {
        return 'Your poetry genre is Epic';
      }
      if (carne.charAt(4) === "9") {
        return 'Your poetry genre is Lyrical';
      }
}


const validateGener = (genero) =>{
    if (
        genero !== "masculino" &&
        genero !== "femenino" &&
        genero !== "Femenino" &&
        genero !== "Masculino"
      )
        return 'Gender Invalid, sorry';
}


export default AgregarUsuario