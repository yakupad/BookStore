import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';
import styles from './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Yazılım Filmleri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#page">Just Another Page</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success">Üye Ol</Button>
            <Button variant="outline-success">Giriş Yap</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
