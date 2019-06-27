import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Container, Row, InputGroup, FormControl, Button, DropdownButton, Dropdown, ButtonToolbar,
} from 'react-bootstrap';
import LazyLoading from '../../common/components/LazyLoading'
import { Banner } from '../../common/components/Banner';
import { actions as movieActions } from '../../redux/modules/movieModule/movieModule'
import { movieSelector } from '../../redux/selectors/movieSelector'
import { SearchBox } from '../../common/components/SearchBox'
import { LeftTab } from '../../common/components/LeftTab'
import { Footer } from '../../common/components/Footer'
// This is lazy loading example
const LazyCardBox = LazyLoading(() => import('../../common/components/CardBox/CardBox'));

class HomeView extends Component {
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
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const { getMovieById } = this.props;
    getMovieById()
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { updateSearchValue, getMovieById } = this.props;
    updateSearchValue({ value });
    getMovieById()
  }

  handleClickMethod = (content) => {
    console.log(content);
  }

  render() {
    const { searchBoxItems } = this.state;

    return (
      <Fragment>
        <Container>
          <Banner />
          <SearchBox searchBoxItems={searchBoxItems} onChanged={this.handleChange} />
          <LeftTab {...this.props} />
          {/* <LazyCardBox {...this.props} click={() => this.handleClickMethod('ahhahahahahahhahhah')} /> */}
          <Footer />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  example: movieSelector(state),
})

const mapDispatchToProps = {
  ...movieActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
