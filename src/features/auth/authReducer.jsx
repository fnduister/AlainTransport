import { handleActions } from 'redux-actions';

const initialState = {
    currentUser: {}
};


const authReducer = handleActions({
    LOGIN_USER: (state, {payload}) => {
        console.log('authReducer: ', payload);
        return {...state, authenticated: true, currentUser:payload.email};
    },
    SIGN_OUT_USER: (state, {payload}) => {
        return {...state, authenticated: false, currentUser: {}};
    }
}, initialState);

export default authReducer;