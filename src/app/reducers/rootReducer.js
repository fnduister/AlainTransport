import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    form: formReducer,
    modal: modalReducer
});

export default rootReducer;