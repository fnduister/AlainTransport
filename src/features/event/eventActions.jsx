import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from './eventConstants';
import { asyncActionStart, asyncActionFinished, asyncActionError } from '../async/asyncActions'
import { createActions } from 'redux-actions';
import { fetchSampleData } from '../../app/data/mockApi';

export const { createEvent, updateEvent, deleteEvent, fetchEvent } = createActions(
    CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT
);

export const loadEvents = () => {
  return async dispatch => {
    try{
        dispatch(asyncActionStart());
        let events = await fetchSampleData();
        dispatch(fetchEvent(events));
        dispatch(asyncActionFinished());
    }catch(error){
        console.log(error);
        dispatch(asyncActionError(error));
    }
  }
}
