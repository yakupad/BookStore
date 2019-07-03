import React, { PureComponent } from 'react';
import {
  Col, Row, Card, Button, ListGroup, ListGroupItem,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import styles from './CardBox.css';


class CardBox extends PureComponent {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <Row>
          {data.map((item) => (
            <Col key={`col-${item.id}`} md={4} sm={6} xs={12} lg={4}>
              <Card className={styles.box} key={`card-${item.id}`} border="success">
                <Card.Img key={`cardimg-${item.id}`} variant="top" src={item.imageUrl} />
                <Card.Body key={`cardbody-${item.id}`}>
                  <Card.Title key={`cardtitle-${item.id}`}>{item.name}</Card.Title>
                  <Card.Text key={`cardtext-${item.id}`}>
                    {item.category}
                  </Card.Text>
                  <Card.Link href={`/#/detail/${item.id}`}>
                    <Button className={styles.watchButton} key={`button-${item.id}`} variant="danger">Filmi İzle</Button>
                  </Card.Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    İzlenme Sayısı:
                    {' '}
                    {item.watchCount}
                  </small>
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
