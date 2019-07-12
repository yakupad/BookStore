import React, { PureComponent } from 'react';
import {
  Row, Card, ListGroup, ListGroupItem, Nav, NavDropdown,
} from 'react-bootstrap';
import styles from './CardBoxDetail.css'

class CardBoxDetail extends PureComponent {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedAlternativeVideo: '',
    }
  }

    handleSelect = (eventKey) => {
      console.log(`selected ${eventKey}`);
    }

    render() {
      const { data } = this.props;
      if (data) {
        return (
          <Row className={styles.cardBox}>
            <Nav variant="tabs" defaultActiveKey="link-3" onSelect={(k) => this.handleSelect(k)} className={styles.navBar}>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Fragman</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Türkçe Altyazılı</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Türkçe Dublaj</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Diğer" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Alternatif 1</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Alternatif 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">IMDBde İncele</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {
                    data.map((item) => (
                      <Card key={`card-${item.id}`}>
                        <Card.Img key={`cardimg-${item.id}`} variant="top" src={item.thumbnailLink} />
                        <Card.Body>
                          <Card.Title key={`cardtitle-${item.id}`}>{item.name}</Card.Title>
                          <Card.Text key={`cardtext-${item.id}`}>
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>
                            <b>Oyuncular:</b>
                            {' '}
                            {item.actor}
                          </ListGroupItem>
                          <ListGroupItem>
                            <b>Yönetmen:</b>
                            {' '}
                            {item.director}
                          </ListGroupItem>
                          <ListGroupItem>
                            <b>IMDB Puanı:</b>
                            {' '}
                            {item.imdbScore}
                          </ListGroupItem>
                          <ListGroupItem>
                            <b>Yapım Yılı:</b>
                            {' '}
                            {item.productionYear}
                          </ListGroupItem>
                          <ListGroupItem>
                            <b>Etiketler:</b>
                            {' '}
                            {item.tag}
                          </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link href="#">Dış Bağlantı 1</Card.Link>
                          <Card.Link href="#">Dış Bağlantı 2</Card.Link>
                        </Card.Body>
                      </Card>
                    ))
                }
          </Row>
        );
      }
      return <div />
    }
}

export default CardBoxDetail;
