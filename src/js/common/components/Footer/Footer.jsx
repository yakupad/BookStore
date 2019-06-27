import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button, Row,
} from 'react-bootstrap';
import styles from './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <Row>
          <div className={styles.footer}>
          Burası Footer
          </div>
      </Row>
    )
  }
}

export default Footer;
