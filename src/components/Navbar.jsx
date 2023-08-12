import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = ({salir}) => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Navbar.Brand as={Link} to="/Home">Cristopher Sutuc xd</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Clientes">Clientes</Nav.Link>
          <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
          <Nav.Link as={Link} to="/Salarios">Calculo Salario</Nav.Link>
          <Nav.Link as={Link} to="/" onClick={salir}>Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
