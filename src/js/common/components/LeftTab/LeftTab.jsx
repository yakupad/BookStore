import React, { PureComponent } from 'react';
import {
  InputGroup, FormControl, Button, DropdownButton, Dropdown, Row, Tab, Nav, Col,
} from 'react-bootstrap';
import LazyLoading from '../LazyLoading'

const LazyCardBox = LazyLoading(() => import('../CardBox/CardBox'));

class LeftTab extends PureComponent {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <LazyCardBox {...this.props} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <LazyCardBox {...this.props} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}

export default LeftTab;
