import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Container, Card, Row, InputGroup, ListGroup, ListGroupItem, FormControl, Button, DropdownButton, Dropdown, ButtonToolbar,
} from 'react-bootstrap';
import LazyLoading from '../../common/components/LazyLoading'
import { Banner } from '../../common/components/Banner';
import { actions as movieActions } from '../../redux/modules/movieModule/movieModule'
import { movieSelector } from '../../redux/selectors/movieSelector'
import { SearchBox } from '../../common/components/SearchBox'
import { CardBoxDetail } from '../../common/components/CardBoxDetail'
import { LeftTab } from '../../common/components/LeftTab'
import { Footer } from '../../common/components/Footer'
// This is lazy loading example
const LazyCardBox = LazyLoading(() => import('../../common/components/CardBox/CardBox'));

class DetailView extends Component {
  static propTypes = {
  }

  state = {
    searchBoxItems: [
      'Barcode',
      'Book Name',
      'Author',
      'Category',
      'Publisher',
    ],
  }

  constructor(prop) {
    super(prop);
    prop.getMovieById(prop.match.params.id)
  }

  componentDidMount() {
  }

  handleChange = (event) => {
    const { value } = event.target;
    console.log(value)
  }

  render() {
    const { searchBoxItems } = this.state;
    const { values } = this.props;

    return (
      <Fragment>
        <Container>
          <CardBoxDetail data={(values && values.resultMovieById) || null} />
          <Footer />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  values: movieSelector(state),
})

const mapDispatchToProps = {
  ...movieActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView)
