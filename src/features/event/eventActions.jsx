import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';
import { createActions } from 'redux-actions';

export const { createEvent, updateEvent, deleteEvent } = createActions({
    CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT
});

