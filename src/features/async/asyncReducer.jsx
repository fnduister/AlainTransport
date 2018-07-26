import { handleActions } from "redux-actions";

const initialState = {
  loading: false
};

const asyncReducer = handleActions(
  {
    ASYNC_ACTION_STARTED: state => {
      return { ...state, loading: true };
    }
  },
  initialState
);


export default asyncReducer;
