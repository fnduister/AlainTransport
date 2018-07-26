import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createActions } from 'redux-actions';
import { closeModal } from '../modals/modalActions';

export const { loginUser, signOutUser } = createActions(
    LOGIN_USER, SIGN_OUT_USER
)

export const login = (creds) => (dispatch) => {
    dispatch(loginUser(creds));
    dispatch(closeModal());
}