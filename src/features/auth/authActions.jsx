import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createActions } from 'redux-actions';

export const { loginUser, signOutUser } = createActions(
    LOGIN_USER, SIGN_OUT_USER
)
