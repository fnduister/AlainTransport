import React, { Component } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events, onDeleteEvent } = this.props;
    return (
      <div>
        {events && events.map(event => (
          <EventListItems
            onDeleteEvent={onDeleteEvent}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
