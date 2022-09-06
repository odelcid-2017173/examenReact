import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import {Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const navigation = useNavigate()

  
  return (
    
   <div className="App" >
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-sm">
            <a className="navbar-brand" href="agregarusuario">Formulario</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={()=> navigation('listaUsuarios')}>Listado de Usuarios</a>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={()=> navigation('agregarusuario')} >Agregar Usuario</button>
                </li>
                
                
                
              </ul>
                
            </div>
          </div> 
        </nav>
        
        <Routes>
          <Route path='listaUsuarios' element={<ListaUsuarios/>} exact></Route>
          <Route path='agregarusuario' element={<AgregarUsuario/>} exact ></Route>
        </Routes>


      
          
    </div>
    
  );
  
}

export default App;
