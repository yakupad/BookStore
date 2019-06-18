import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Container, Row, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import LazyLoading from '../../common/components/LazyLoading'
import { Banner } from '../../common/components/Banner';
import { actions as bookActions } from '../../redux/modules/bookModule'
import { bookSelector, bookSelector1 } from '../../redux/selectors/bookSelector'

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
    const { updateState, getAwesomeCode } = this.props;
    getAwesomeCode()
  }

  handleChange() {
    const { value } = this.textInput.current;
    const { updateState, getAwesomeCode } = this.props;
    updateState({ value });
    getAwesomeCode()
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Banner />
          <InputGroup>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              ref={this.textInput}
              type="text"
              onChange={() => this.handleChange()}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
          <LazyCardBox {...this.props} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  example: bookSelector(state),
  hello: bookSelector1(state),
})

const mapDispatchToProps = {
  ...bookActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
