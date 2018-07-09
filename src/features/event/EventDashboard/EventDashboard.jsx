import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { connect } from 'react-redux'

const mapState = state => ({
  events: state.events
});

class EventDashboard extends Component {
  state = {
    selectedEvent: null,
    isOpen: false
  };

  formOpenHandler = () => {
    this.setState(prevState => ({
      selectedEvent: null,
      isOpen: !prevState.isOpen
    }));
  };

  createEventHandler = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  updateEventHandler = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      })
    });
  };

  editEventHandler = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  deleteEventHandler = eventID => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventID);
    this.setState({
      events: updatedEvents
    })
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onDeleteEvent={this.deleteEventHandler}
            onEventEdit={this.editEventHandler}
            events={this.props.events}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            onClick={this.formOpenHandler}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              onUpdateEvent={this.updateEventHandler}
              selectedEvent={this.state.selectedEvent}
              createEvent={this.createEventHandler}
              formOpen={this.formOpenHandler}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(EventDashboard);
