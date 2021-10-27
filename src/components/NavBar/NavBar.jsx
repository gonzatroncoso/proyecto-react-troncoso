import React from 'react';
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';

  const  NavBar = () => {
    return (
          <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Categorias</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
          Novedades
        </Nav.Link>
      </Nav.Item>
      <CartWidget  />
    </Nav>
   );
  }

export default NavBar;