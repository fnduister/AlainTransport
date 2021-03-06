import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISHED
} from "./asyncConstants";

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};
export const asyncActionFinished = () => {
  return {
    type: ASYNC_ACTION_FINISHED
  };
};
export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
