import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    
   <div className="App" >
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-sm">
            <a className="navbar-brand" href="#">Formulario</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Listado de Usuarios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
                </li>
                
                
                
              </ul>
                
            </div>
          </div> 
        </nav>

        
        


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AgregarUsuario/>} exact></Route>
          <Route path='/ListaUsuarios' element={<ListaUsuarios/>} exact></Route>
        </Routes>
      </BrowserRouter>

      
          
    </div>
    
  );
  
}

export default App;
