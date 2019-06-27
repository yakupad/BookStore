import React, { PureComponent } from 'react';
import {
  Col, Row, Card, Button,
} from 'react-bootstrap';
import styles from './CardBox.css';

class CardBox extends PureComponent {
  render() {
    const { example, click } = this.props;
    const result = (example && example.result) || null;
    if (result) {
      return (
        <Row>
          {result.map((item) => (
            <Col key={`col-${item.id}`} md={4} sm={6} xs={12} lg={4}>
              <Card className={styles.box} key={`card-${item.id}`} border="success">
                <Card.Img key={`cardimg-${item.id}`} variant="top" src="http://placehold.it/150x150/ffffff/c0392b/&text=Card One" />
                <Card.Body key={`cardbody-${item.id}`}>
                  <Card.Title key={`cardtitle-${item.id}`}>{item.description}</Card.Title>
                  <Card.Text key={`cardtext-${item.id}`}>
                    {item.category}
                  </Card.Text>
                  <Button key={`button-${item.id}`} onClick={click} variant="danger">{item.category}</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
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
