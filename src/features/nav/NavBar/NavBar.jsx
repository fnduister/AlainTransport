import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  }

  signedInHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  signedOutHandler = () => {
    this.setState({
      authenticated: false
    })
    this.props.history.push('/');
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
                </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />

          {authenticated &&
            <Menu.Item as={NavLink} to="/people" name="People" />}

          {authenticated &&
            <Menu.Item>
              <Button as={Link} to="/createEvent" floated="right" positive inverted>Create Event</Button>
            </Menu.Item>
          }

          {authenticated ? <SignedInMenu signedOut={this.signedOutHandler} /> : <SignedOutMenu signedIn={this.signedInHandler} />}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(NavBar);