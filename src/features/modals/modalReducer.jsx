import { handleActions } from 'redux-actions';

const initialState = null;


const modalReducer = handleActions({
    OPEN_MODAL: (state, {payload}) => {
        console.log('dans modalReducer');
        console.log(payload);
        return {modalType:payload};
    },
    CLOSE_MODAL: (state, action) => {
        return null;
    }
}, initialState);

export default modalReducer;