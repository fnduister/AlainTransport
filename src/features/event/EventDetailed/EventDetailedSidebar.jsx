import React from 'react';
import { Segment, Item, List, Label } from 'semantic-ui-react';

const EventDetailedSidebar = ({attendees}) => {
    return (
           <div>
              <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
              >
              {attendees && attendees.length} {attendees && attendees.length === 1 ? 'person':'people'} listed
              </Segment>
              <Segment attached>
                <List relaxed divided>
                {attendees && attendees.map(attendee => 
                <Item key={attendee.id} style={{ position: 'relative' }}>
                    <Label
                      style={{ position: 'absolute' }}
                      color="orange"
                      ribbon="right"
                    >
                      Host
                    </Label>
                    <Item.Image size="tiny" src={attendee.photoURL} />
                    <Item.Content verticalAlign="middle">
                      <Item.Header as="h3">
                        <a>{attendee.name}</a>
                      </Item.Header>
                    </Item.Content>
                  </Item>
                )}
                  
                </List>
              </Segment>
            </div>
    );
};

export default EventDetailedSidebar;