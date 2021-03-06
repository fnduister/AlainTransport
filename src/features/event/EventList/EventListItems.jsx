import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import format from "date-fns/format";
import { Link } from "react-router-dom";

const EventListItems = ({ event, onDeleteEvent }) => (
  <Segment.Group>
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
          <Item.Content>
            <Item.Header as="a">{event.title}</Item.Header>
            <Item.Description>
              Hosted by <a>{event.hostedBy}</a>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment>
      <span>
        <Icon name="clock" /> {format(event.date.toDate(), "dddd Do MMMM")} at{" "}
        {format(event.date.toDate(), "HH:mm")}
        <Icon name="marker" /> {event.venue}
      </span>
    </Segment>
    <Segment secondary>
      <List horizontal>
        {event.attendees &&
          Object.values(event.attendees).map((attendee, index) => (
            <EventListAttendee key={index} attendee={attendee} />
          ))}
      </List>
    </Segment>
    <Segment clearing>
      <span>{event.description}</span>
      <Button
        onClick={onDeleteEvent(event.id)}
        as="a"
        color="red"
        floated="right"
        content="Delete"
      />
      <Button
        to={`/event/${event.id}`}
        as={Link}
        color="teal"
        floated="right"
        content="View"
      />
    </Segment>
  </Segment.Group>
);

export default EventListItems;
