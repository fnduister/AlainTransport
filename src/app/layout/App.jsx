import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingDashBoard from "../../features/user/Settings/SettingsDashBoard";
import NavBar from "../../features/nav/NavBar/NavBar";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import Aus from "../hoc/Aus/Aus";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <Aus>
        <Route exact path="/" component={HomePage} />

        <Route
          path="/(.+)"
          render={() => (
            <Aus>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashBoard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </Aus>
          )}
        />
      </Aus>
    );
  }
}

export default App;
