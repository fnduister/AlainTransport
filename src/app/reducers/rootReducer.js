import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    form: formReducer,
    modal: modalReducer,
    auth: authReducer
});

export default rootReducer;