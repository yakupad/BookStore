import React, { PureComponent } from 'react';
import {
  Row, Card, ListGroup, ListGroupItem,
} from 'react-bootstrap';

class CardBoxDetail extends PureComponent {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <Row>
          {
                    data.map((item) => (
                      <Card key={`card-${item.id}`} style={{ width: '100%' }}>
                        <Card.Img key={`cardimg-${item.id}`} variant="top" src={item.thumbnailLink} />
                        <Card.Body>
                          <Card.Title key={`cardtitle-${item.id}`}>{item.name}</Card.Title>
                          <Card.Text key={`cardtext-${item.id}`}>
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>{item.actor}</ListGroupItem>
                          <ListGroupItem>{item.director}</ListGroupItem>
                          <ListGroupItem>{item.imdbScore}</ListGroupItem>
                          <ListGroupItem>{item.productionYear}</ListGroupItem>
                          <ListGroupItem>{item.tag}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link href="#">Card Link</Card.Link>
                          <Card.Link href="#">Another Link</Card.Link>
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
