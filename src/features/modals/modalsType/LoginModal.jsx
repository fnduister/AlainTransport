import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import LoginForm from '../../auth/Login/LoginForm';

class LoginModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Login to Re-vents
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default LoginModal;