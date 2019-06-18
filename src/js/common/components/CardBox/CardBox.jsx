import React, { PureComponent } from 'react';
import {
  Col, Row, Card, Button,
} from 'react-bootstrap';

class CardBox extends PureComponent {
  render() {
    const { example, hello } = this.props;
    const result = (example && example.result) || null;
    if (result) {
      return (
        <Row>
          {result.map((item) => (
            <Col key={`col-${item.id}`} md={4}>
              <Card key={`card-${item.id}`} border="success" style={{ height: '500px' }}>
                <Card.Img key={`cardimg-${item.id}`} variant="top" src="http://placehold.it/200x280/ffffff/c0392b/&text=Card One" />
                <Card.Body key={`cardbody-${item.id}`}>
                  <Card.Title key={`cardtitle-${item.id}`}>{item.name + item.id}</Card.Title>
                  <Card.Text key={`cardtext-${item.id}`}>
                    {item.category}
                  </Card.Text>
                  <Button key={`button-${item.id}`} variant="danger">{item.printedYear}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Row>
      );
    }

    return <div />
  }
}

export default CardBox;
