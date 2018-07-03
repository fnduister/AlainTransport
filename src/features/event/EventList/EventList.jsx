import React, { Component } from "react";
import Aus from "../../../app/hoc/Aus/Aus";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Aus>
        <h1>Event List</h1>
        {events.map(event => <EventListItems key={event.id} event={event} />)}
      </Aus>
    );
  }
}

export default EventList;
