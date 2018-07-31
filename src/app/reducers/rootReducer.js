import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
    events: eventReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
    modal: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr:toastrReducer,

});

export default rootReducer;