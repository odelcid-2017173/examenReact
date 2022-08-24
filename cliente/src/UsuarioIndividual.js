import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css';


function UsuarioIndividual({usuario}){


    const navegar = useNavigate()


    //Para animacion scroll al bajar

    useEffect(() => {
        AOS.init()
    }, [])



    return(
       <div className="container">
           <div className="row">

           <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Cumpleaños</th>
      <th scope="col">Genero de Poesia</th>
      <th scope="col">carrera</th>
      <th scope="col">inscripcion</th>
    </tr>
  </thead>
  <tbody>
    <tr>   
      <td>{usuario.nombre}</td>
      <td>{usuario.cumpleaños}</td>
      <td>{usuario.results}</td>
      <td>{usuario.carrera}</td>
      <td>{usuario.inscripcion}</td>
    </tr>   
  </tbody>
</table>             
           </div>
           
       </div> 
    )
}

export default UsuarioIndividual