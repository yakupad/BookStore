import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';
import styles from './Header.css';
import { AuthBox } from '../AuthBox'

class Header extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      authBoxShow: false,
      boxType: 0,
    }
  }

  render() {
    const authBoxClose = () => this.setState({ authBoxShow: false });
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
            <AuthBox show={this.state.authBoxShow} onHide={authBoxClose} boxtype={this.state.boxType}/>
            <Button variant="outline-success" onClick={() => this.setState({ authBoxShow: true, boxType: 0 })}>Üye Ol</Button>
            <Button variant="outline-success" onClick={() => this.setState({ authBoxShow: true, boxType: 1 })}>Giriş Yap</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
