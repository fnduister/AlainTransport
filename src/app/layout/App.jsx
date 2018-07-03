import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar/NavBar";
import Aus from "../hoc/Aus/Aus";

class App extends Component {
  render() {
    return (
      <Aus>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Aus>
    );
  }
}

export default App;
