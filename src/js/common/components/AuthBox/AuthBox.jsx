import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
  Container, Modal, Row, Col, Button, Form, InputGroup,
} from 'react-bootstrap';
import { actions as userActions } from '../../../redux/modules/userModule/userModule'
import styles from './AuthBox.css';

class AuthBox extends PureComponent {
  constructor(prop) {
    super(prop);
    this.state = { validated: false };
    console.log(this.prop)
  }

  loginModel = () => {
    const { validated } = this.state;
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Üye Ol
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Form
                noValidate
                validated={validated}
                onSubmit={(e) => this.handleSubmitLogin(e)}
                style={{ width: '100%' }}
              >
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" inputRef={(ref) => { this.email = ref }} required />
                  <Form.Text className="text-muted">
      Well never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
    Submit
                </Button>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  signUpModel = () => {
    const { validated } = this.state;
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Üye Ol
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Form
                noValidate
                validated={validated}
                onSubmit={(e) => this.handleSubmitSignup(e)}
                style={{ width: '100%' }}
              >
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
              Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationRetypePassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Retype Password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  validateForm(event) {
    const form = event.currentTarget;
    this.setState({ validated: true });
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    return true;
  }

  handleSubmitLogin(event) {
    const formValues = event.target.elements;
    const { getLoginUser } = this.props;

    if (this.validateForm(event)) {
      const bodyFormData = new FormData();
      bodyFormData.set('username', (formValues
                        && formValues.formLoginEmail
                        && formValues.formLoginEmail.value) || null);
      bodyFormData.set('password', (formValues
                        && formValues.formLoginPassword
                        && formValues.formLoginPassword.value) || null);
      getLoginUser(bodyFormData);
    }
  }

  handleSubmitSignup(event) {
    const formValues = event.target.elements;
    const { getCreateUser } = this.props;

    if (this.validateForm(event)) {
      const requestData = {
        username:
            (formValues
                && formValues.validationUsername
                && formValues.validationUsername.value) || null,
        name:
            (formValues
                && formValues.validationFirstName
                && formValues.validationFirstName.value) || null,
        lastName:
            (formValues
                && formValues.validationLastName
                && formValues.validationLastName.value) || null,
        birthday:
            (formValues
                && formValues.validationBirthday
                && formValues.validationBirthday.value) || null,
        phoneNumber:
            (formValues
                && formValues.validationPhoneNumber
                && formValues.validationPhoneNumber.value) || null,
        address:
            (formValues
                && formValues.validationAddress
                && formValues.validationAddress.value) || null,
        password:
            (formValues
                && formValues.validationPassword
                && formValues.validationPassword.value) || null,
        email:
            (formValues
                && formValues.validationEmail
                && formValues.validationEmail.value) || null,
        fbUrl:
            (formValues
                && formValues.validationfbUrl
                && formValues.validationfbUrl.value) || null,
        twitterUrl:
            (formValues
                && formValues.validationTwitterUrl
                && formValues.validationTwitterUrl.value) || null,
        createdDate: new Date(),
        updatedDate: new Date(),
      }
      getCreateUser(requestData);
    }
  }

  render() {
    return (
      <div>
        { this.props.boxtype === 0 ? this.signUpModel() : this.loginModel() }
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  ...userActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthBox)
