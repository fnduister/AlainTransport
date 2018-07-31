import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { firestoreConnect } from "react-redux-firebase";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { deleteEvent } from "../eventActions";
import LoaderComponent from "../../../app/layout/LoaderComponent";
import EventActivity from "../EventActivity/EventActivity";

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const actions = { deleteEvent };

class EventDashboard extends Component {
  deleteEventHandler = eventID => () => {
    this.props.deleteEvent(eventID);
  };

  render() {
    return this.props.loading ? (
      <LoaderComponent />
    ) : (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onDeleteEvent={this.deleteEventHandler}
            events={this.props.events}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
