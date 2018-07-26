import React from 'react'
import { connect } from 'react-redux';
import { closeModal } from './modalActions';
import RegisterModal from './modalsType/RegisterModal';
import LoginModal from './modalsType/LoginModal';

const modalLookup = {
    RegisterModal,
    LoginModal
}

const mapState = state => ({
    currentModal: state.modal
})

const ModalManager = ({currentModal, closeModal}) => {
    let renderedModal;

    if(currentModal){
        const {modalType} = currentModal;
        const ModalComponent = modalLookup[modalType];
        console.log('modalManager '+modalType);
        renderedModal = <ModalComponent closeModal={closeModal}/>;
    }
  return  <span>{renderedModal}</span>
}

export default connect(mapState, {closeModal})(ModalManager);
