import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
  const eventID = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventID && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventID)[0];
  }

  return {event};
}

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };


  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.onUpdateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                onChange={this.onInputChange}
                value={this.state.event.title}
                placeholder="Event Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                onChange={this.onInputChange}
                value={this.state.event.date}
                type="date"
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                onChange={this.onInputChange}
                value={this.state.event.city}
                placeholder="City event is taking place"
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                onChange={this.onInputChange}
                value={this.state.event.venue}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                onChange={this.onInputChange}
                value={this.state.event.hostedBy}
                placeholder="Enter the name of person hosting"
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={this.props.formOpen}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default connect(mapState)(EventForm);
