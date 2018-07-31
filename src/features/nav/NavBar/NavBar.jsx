import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { withFirebase } from 'react-redux-firebase';
import { Link, NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";

const actions = {
  openModal
}

const mapState = state => ({
  auth: state.firebase.auth
})


class NavBar extends Component {

  signedInHandler = () => {
    this.props.openModal('LoginModal');
  };

  registerHandler = () => {
    this.props.openModal('RegisterModal');
  };

  signedOutHandler = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

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
            <SignedInMenu auth={auth} signedOut={this.signedOutHandler} />
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

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
