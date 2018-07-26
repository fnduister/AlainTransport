import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";
import { signOutUser } from '../../auth/authActions';

const actions = {
  openModal,
  signOutUser
}

const mapState = state => ({
  auth: state.auth
})


class NavBar extends Component {

  signedInHandler = () => {
    this.props.openModal('LoginModal');
  };

  registerHandler = () => {
    this.props.openModal('RegisterModal');
  };

  signedOutHandler = () => {
    this.props.signOutUser();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />

          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}

          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
              >
                Create Eventdd
              </Button>
            </Menu.Item>
          )}

          {authenticated ? (
            <SignedInMenu currentUser={auth.currentUser} signedOut={this.signedOutHandler} />
          ) : (
            <SignedOutMenu
              register={this.registerHandler}
              signedIn={this.signedInHandler}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter( connect(mapState, actions)(NavBar) );
