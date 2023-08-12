import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx"
import Producto from "./components/Productos.jsx"
import Cliente from "./components/Clientes.jsx"
import Login from "./Login.jsx"
import Salarios from "./components/Salrios.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [login, setLogin] = useState(false);

const entrar = () => {
  setLogin(true);
}
const salir = () => {
  setLogin(false);
}
  return (
    <>
    <Router>
      <div className="App">
        
        {login ? (
         <div>
            <header>
            <Navbar salir={salir}/>
            </header>
          <main>
            <Routes> 
              <Route path="/Home" element={<Home />} />
              <Route path="/Clientes" element={<Cliente />} />
              <Route path="/Productos" element={<Producto />} />
              <Route path="/Salarios" element={<Salarios />} />
            </Routes>
          </main>
          <footer>
            {"By Choper03"}
          </footer>
      </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login entrar={entrar}/> } />
        </Routes>
      )}
      </div>
    </Router>
  </>
  )
}

export default App;
