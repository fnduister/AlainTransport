import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT
} from "./eventConstants";
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from "../async/asyncActions";
import { createActions } from "redux-actions";
import { fetchSampleData } from "../../app/data/mockApi";
import { toastr } from 'react-redux-toastr';

export const {
  createEvent,
  updateEvent,
  deleteEvent,
  fetchEvent
} = createActions(
  {
    CREATE_EVENT: (event) => {
        return async dispatch => {
            try{
                dispatch({
                    type: CREATE_EVENT,
                    payload:{
                        event
                    }
                });
                toastr.success('Success!', 'Event Created');
            }catch(error){
                toastr.error('error', 'Oupss!! Something wrong happened')
            }
        }
    },
    UPDATE_EVENT: (event) => {
        return async dispatch => {
            try{
                dispatch({
                    type: UPDATE_EVENT,
                    payload:{
                        event
                    }
                });
                toastr.success('Success!', 'Event Updated');
            }catch(error){
                toastr.error('error', 'Oupss!! Something wrong happened')
            }
        }
    }
  },
  DELETE_EVENT,
  FETCH_EVENT
);

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvent(events));
      dispatch(asyncActionFinished());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError(error));
    }
  };
};
