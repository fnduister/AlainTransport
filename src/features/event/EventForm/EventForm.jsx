import React, { Component } from "react";
import moment from 'moment';
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from "revalidate";
import { cuid } from "cuid";
import TextInput from "../../../app/common/form/TextInput"; 
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import { createEvent, updateEvent, deleteEvent } from '../eventActions';
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventID = ownProps.match.params.id;

  let event = {};

  if (eventID && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventID)[0];
  }

  return { initialValues: event };
};

const actions = {createEvent, updateEvent, deleteEvent};

const validate = combineValidators({
  title:isRequired({message:'Please enter a title'}),
  category:isRequired({message:'please choose a category'}),
  description:composeValidators(
    isRequired({message:'please enter a description'}),
    hasLengthGreaterThan(4)({message:'Description needs to be at least 4 characters'})
  )(),
  city:isRequired('city'),
  date:isRequired('date'),
  venue:isRequired('venue')
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  onFormSubmit = values => {
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
    } else {
      const newEvent={
        ...values,
        id:cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      }
      this.props.createEvent(newEvent);
    }
    this.props.history.push('/events');
  };


  render() {
    const {invalid, pristine, submitting} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <Segment>
              <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Header color="teal" sub content="Event Details" />
                <Field
                  name="title"
                  type="text"
                  component={TextInput}
                  placeholder="Give your event a name"
                />
                <Field
                  name="category"
                  type="text"
                  component={SelectInput}
                  options={category}
                  placeholder="What is your event about"
                />
                <Field
                  name="description"
                  type="text"
                  component={TextArea}
                  placeholder="Event description"
                />
                <Header sub color="teal" content="Event Location Details" />
                <Field
                  name="city"
                  type="text"
                  component={TextInput}
                  placeholder="Event city"
                />
                <Field
                  name="venue"
                  type="text"
                  component={TextInput}
                  placeholder="Event venue"
                />
                <Field
                  name="date"
                  type="text"
                  component={DateInput}
                  dateFormat='YYYY-MM-DD HH:mm'
                  timeFormat='HH:mm'
                  showTimeSelect
                  placeholder="Date and Time of event"
                />

                <Button disabled={invalid || pristine || submitting} positive type="submit">
                  {this.props.initialValues.id ? "Update": "Submit"}
                </Button>
                <Button type="button" onClick={this.props.formOpen}>
                  Cancel
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapState, actions)(reduxForm({ form: "evenForm", enableReinitialize: true, validate })(EventForm));
