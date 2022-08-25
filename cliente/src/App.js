import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import {HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  
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
                  <a className="nav-link active" aria-current="page" href="listaUsuarios">Listado de Usuarios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
                </li>
                
                
                
              </ul>
                
            </div>
          </div> 
        </nav>
        
        

      <HashRouter baseline="/" >
        <Routes>
          <Route path='/listaUsuarios' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario/>} ></Route>
        </Routes>
      </HashRouter>

      
          
    </div>
    
  );
  
}

export default App;
