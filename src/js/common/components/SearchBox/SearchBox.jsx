import React, { PureComponent } from 'react';
import { Row } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import styles from './SearchBox.css';

class SearchBox extends PureComponent {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    }
  }

    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue,
      });
    };

    onSuggestionSelected = (event, { suggestion }) => {
      window.location.href = `#/detail/${suggestion.id}`
    }

    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value),
      });
    };

    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: [],
      });
    };

    getSuggestions(value) {
      const escapedValue = this.escapeRegexCharacters(value.trim());

      if (escapedValue === '') {
        return [];
      }

      const regex = new RegExp(`\\b${escapedValue}`, 'i');

      const { values } = this.props;
      const allMovies = (values && values.resultMovie) || null

      return allMovies.filter((movie) => regex.test(this.getSuggestionValue(movie)));
    }

    getSuggestionValue = (suggestion) => {
      return `${suggestion.name} ${suggestion.productionYear}`;
    }

    escapeRegexCharacters = (str) => {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    renderSuggestion = (suggestion, { query }) => {
      const suggestionText = `${suggestion.name} ${suggestion.productionYear}`;
      const matches = match(suggestionText, query);
      const parts = parse(suggestionText, matches);

      const suggestionImage = {
        backgroundImage: `url(${suggestion.imageUrl})`,
        backgroundSize: 'contain',
      }

      return (
        <span className={styles.suggestionContent} style={suggestionImage}>
          <span className={styles.name}>
            {
              parts.map((part, index) => {
                const className = part.highlight ? styles.highlight : null;

                return (
                  <span className={className} key={index}>{part.text}</span>
                );
              })
            }
          </span>
        </span>
      );
    }

    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: 'Search Movie',
        value,
        onChange: this.onChange,
      };
      return (
        <Row className={styles.searchBox}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            theme={styles}
          />
        </Row>
      )
    }
}

export default SearchBox;
