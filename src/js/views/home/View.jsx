import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Container, Row, InputGroup, FormControl, Button, DropdownButton, Dropdown, ButtonToolbar,
} from 'react-bootstrap';
import LazyLoading from '../../common/components/LazyLoading'
import { Banner } from '../../common/components/Banner';
import { actions as movieActions } from '../../redux/modules/movieModule/movieModule'
import { actions as userActions } from '../../redux/modules/userModule/userModule'
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
  }

  constructor(prop) {
    super(prop);
    this.textInput = React.createRef();
  }

  componentDidMount() {
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { updateSearchValue } = this.props;
    updateSearchValue({ value });
  }

  handleClickMethod = (content) => {
    console.log(content);
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Banner />
          <SearchBox {...this.props} />
          <LeftTab {...this.props} />
          {/* <LazyCardBox {...this.props} click={() => this.handleClickMethod('ahhahahahahahhahhah')} /> */}
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
  ...userActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
