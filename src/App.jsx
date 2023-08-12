import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx"
import Producto from "./components/Productos.jsx"
import Cliente from "./components/Clientes.jsx"
import Login from "./Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes> {}
            <Route path="/" element={<Home />} /> {}
            <Route path="/Login" element={<Login />} />
            <Route path="/Clientes" element={<Cliente />} />
            <Route path="/Productos" element={<Producto />} />
          </Routes>
        </main>
        <footer>
          {"By Choper03"}
        </footer>
      </div>
    </Router>
  </>
  )
}

export default App;
