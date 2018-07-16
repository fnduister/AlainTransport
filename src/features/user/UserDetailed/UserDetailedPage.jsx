import React from 'react';
import {Grid} from 'semantic-ui-react';
import EventDetailedChat from '../../event/EventDetailed/EventDetailledChat';

const UserDetailledPage = () => {
  return (
    <Grid>
      <Grid.column width={10}>
        <EventDetailedChat/>
      </Grid.column>

      <Grid.column width={6}>
      
      </Grid.column>
      <h1>User Detailled Page</h1>
    </Grid>
  )
};

export default UserDetailledPage;