import { CLOSE_MODAL, OPEN_MODAL } from './modalConstants';
import { createActions } from 'redux-actions';

export const { openModal, closeModal } = createActions(
    OPEN_MODAL, CLOSE_MODAL
);
