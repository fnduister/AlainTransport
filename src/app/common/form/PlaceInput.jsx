import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete from "react-places-autocomplete";

const styles = {
    autocompleteContainer: {
        zIndex:1100
    }
}

class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  render() {
      
    const {
      meta: { error, touched },
      input,
      width,
      onSelect,
      options,
      placeholder
    } = this.props;
    
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaDkcS8z0oPxzsbfzWNOk3mmBQ-AZz4qc&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        {this.state.scriptLoaded &&
        <PlacesAutocomplete
          inputProps={{ ...input, placeholder }}
          options={options}
          onSelect={onSelect}
          styles={styles}
        />}
        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
