import React, { PureComponent } from 'react';
import {
  InputGroup, FormControl, Button, DropdownButton, Dropdown, ButtonToolbar, Row,
} from 'react-bootstrap';
import styles from './SearchBox.css';

class SearchBox extends PureComponent {
    state = {
      dropdownButtonTitle: 'Select Search Type',
    }

    handleDropdownItem = (itemName) => {
      this.setState({
        dropdownButtonTitle: itemName,
      })
    }

    render() {
      const { searchBoxItems, onChanged } = this.props;
      const { dropdownButtonTitle } = this.state;

      const dropdownItems = searchBoxItems.map((itemName, index) => (
        <Dropdown.Item onClick={() => this.handleDropdownItem(itemName)} key={`dropdown-item${index + 1}`} eventKey={index}>{itemName}</Dropdown.Item>
      ))

      return (
        <Row>
          <InputGroup className={styles.inputGroup}>

            <ButtonToolbar>
              <DropdownButton
                drop="down"
                variant="secondary"
                title={dropdownButtonTitle}
                id="dropdown-button-search-type"
                className={styles.dropdownButton}
              >
                {dropdownItems}
                {/* <Dropdown.Divider /> */}
              </DropdownButton>
            </ButtonToolbar>
            <FormControl
              placeholder="Please search keyword..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              onChange={onChanged}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
      )
    }
}

export default SearchBox;
