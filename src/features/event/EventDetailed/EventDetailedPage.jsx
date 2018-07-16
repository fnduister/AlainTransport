import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailledChat';
import { connect } from 'react-redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedInfo from './EventDetailedInfo';

const mapState = (state, ownProps) => {
  const eventID = ownProps.match.params.id;

  let event = {};

  if (eventID && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventID)[0];
    console.log(event);
}

return {event};
}


const EventDetailedPage = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}/>
        <EventDetailedInfo event={event}/>
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState)(EventDetailedPage);
