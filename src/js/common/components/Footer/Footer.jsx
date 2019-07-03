import React, { PureComponent } from 'react';
import {
  Row, Col, ListGroup, Image, Jumbotron, Button,
} from 'react-bootstrap';
import styles from './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <Row className={styles.footer}>
        <Col md={8}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col md={4}>
          <Image className={styles.leftImage} src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg" roundedCircle />
        </Col>
      </Row>
    )
  }
}

export default Footer;
