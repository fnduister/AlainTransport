import { handleActions } from 'redux-actions';

 const initialState = [];

 const eventReducer = handleActions({
    CREATE_EVENT: (state, action) => {
        return [...state, Object.assign({}, action.payload)]
    },
    UPDATE_EVENT: (state, action) => {
        return [...state.filter(event => event.id !== action.payload.id), Object.assign({}, action.payload)]
    },
    DELETE_EVENT: (state, action) => {
        return [...state.filter(event => event.id !== action.payload)]
    },
    FETCH_EVENT: (state, {payload}) => {
        return payload;
    }
}, initialState);

export default eventReducer;