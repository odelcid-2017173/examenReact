import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>   
      <td>{usuario.idusuario}</td>
      <td>{usuario.nombre}</td>
      <td>@{usuario.email}</td>
      <td>@{usuario.telefono}</td>
    </tr>   
  </tbody>
</table>             
           </div>
           
       </div> 
    )
}

export default UsuarioIndividual