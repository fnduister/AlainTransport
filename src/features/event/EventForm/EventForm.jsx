/* global google*/
import React, { Component } from "react";
import moment from "moment";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Script from "react-load-script";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";

const mapState = (state, ownProps) => {
  const eventID = ownProps.match.params.id;

  let event = {};

  if (eventID && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventID)[0];
  }

  return { initialValues: event };
};

const actions = { createEvent, updateEvent, deleteEvent };

const validate = combineValidators({
  title: isRequired({ message: "Please enter a title" }),
  category: isRequired({ message: "please choose a category" }),
  description: composeValidators(
    isRequired({ message: "please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 4 characters"
    })
  )(),
  city: isRequired("city"),
  date: isRequired("date"),
  venue: isRequired("venue")
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  onFormSubmit = values => {
    values.date = moment(values.date).format();
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
    }
    this.props.history.push("/events");
  };

  render() {
    const { invalid, pristine, submitting } = this.props;
    return (
      <div>
        <Grid>
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaDkcS8z0oPxzsbfzWNOk3mmBQ-AZz4qc&libraries=places"
            onLoad={this.handleScriptLoad}
          />
          <Grid.Column width={10}>
            <Segment>
              <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Header color="teal" sub content="Event Details" />
                <Field
                  name="title"
                  type="text"
                  component={TextInput}
                  placeholder="Give your event a name"
                />
                <Field
                  name="category"
                  type="text"
                  component={SelectInput}
                  options={category}
                  placeholder="What is your event about"
                />
                <Field
                  name="description"
                  type="text"
                  component={TextArea}
                  placeholder="Event description"
                />
                <Header sub color="teal" content="Event Location Details" />
                <Field
                  name="city"
                  type="text"
                  options={{
                    types: ["(cities)"]
                  }}
                  component={PlaceInput}
                  placeholder="Event city"
                  onSelect={this.handleCitySelect}
                />
                {this.state.scriptLoaded && (
                  <Field
                    name="venue"
                    type="text"
                    options={{
                      location: new google.maps.LatLng(this.state.cityLatLng),
                      radius: 1000,
                      types: ["establishment"]
                    }}
                    component={PlaceInput}
                    placeholder="Event venue"
                    onSelect={this.handleVenueSelect}
                  />
                )}
                <Field
                  name="date"
                  type="text"
                  component={DateInput}
                  dateFormat="YYYY-MM-DD HH:mm"
                  timeFormat="HH:mm"
                  showTimeSelect
                  placeholder="Date and Time of event"
                />

                <Button
                  disabled={invalid || pristine || submitting}
                  positive
                  type="submit"
                >
                  {this.props.initialValues.id ? "Update" : "Submit"}
                </Button>
                <Button type="button" onClick={this.props.formOpen}>
                  Cancel
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "evenForm", enableReinitialize: true, validate })(EventForm)
);
