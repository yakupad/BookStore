import React, { PureComponent } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

class Banner extends PureComponent {
  render() {
    return (
      <Row>
        <Carousel>
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide1" alt="image1" />
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide2" alt="image2" />
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide3" alt="image3" />
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide4" alt="image4" />
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide5" alt="image5" />
          <img src="http://placehold.it/1000x200/ffffff/c0392b/&text=slide6" alt="image6" />
        </Carousel>
      </Row>
    );
  }
}

export default Banner;
