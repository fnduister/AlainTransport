import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";

import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions';


const mapState = state => ({
  events: state.events
});

const actions = {deleteEvent};


class EventDashboard extends Component {

  deleteEventHandler = eventID => () => {
    this.props.deleteEvent(eventID);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onDeleteEvent={this.deleteEventHandler}
            events={this.props.events}
          />
        </Grid.Column>

        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
