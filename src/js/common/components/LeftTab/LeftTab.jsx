import React, { PureComponent } from 'react';
import {
  InputGroup, FormControl, Button, DropdownButton, Dropdown, Row, Tab, Nav, Col,
} from 'react-bootstrap';
import LazyLoading from '../LazyLoading'

const LazyCardBox = LazyLoading(() => import('../CardBox/CardBox'));

class LeftTab extends PureComponent {
  constructor(prop) {
    super(prop)
    prop.getMovies()
  }

  render() {
    const { getMovieById, getMovies, getMoviesSorted, values } = this.props;
    console.log(values)
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link onSelect={getMovies} eventKey="first">All Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onSelect={() => getMoviesSorted('DESC', 'imdbScore')} eventKey="second">IMDB Skoru</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onSelect={() => getMoviesSorted('DESC', 'watchCount')} eventKey="third">İzlenme Sayısı</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onSelect={() => getMoviesSorted('DESC', 'productionYear')} eventKey="fourth">Yapım Yılı</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onSelect={() => getMovieById('5d1ae96debd31c4f6d352554')} eventKey="fifth">Movie By Id</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <LazyCardBox data={(values && values.resultMovie) || null} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <LazyCardBox data={(values && values.resultMovieSorted) || null} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <LazyCardBox data={(values && values.resultMovieSorted) || null} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <LazyCardBox data={(values && values.resultMovieSorted) || null} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <LazyCardBox data={(values && values.resultMovieById) || null} click={() => this.handleClickMethod('ahhahahahahahhahhah')} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}

export default LeftTab;
