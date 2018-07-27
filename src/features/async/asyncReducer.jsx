import { handleActions } from "redux-actions";

const initialState = {
  loading: false
};

const asyncReducer = handleActions(
  {
    ASYNC_ACTION_START: state => {
      return { ...state, loading: true };
    },
    ASYNC_ACTION_FINISHED: state => {
      return {...state, loading: false}
    }
  },
  initialState
);


export default asyncReducer;
