import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom'
import SettingsNav from './SettingsNav';
import BasicPage from './BasicPage';
import AccountPage from './AccountPage';
import PhotosPage from './PhotosPage';
import AboutPage from './AboutPage';

const SettingsDashBoard = () => {
  return (
    <Grid>
      <Grid.Column width={4} ><SettingsNav /></Grid.Column>

      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basics'/>
          <Route path="/settings/basics" component={BasicPage} />
          <Route path="/settings/account" component={AccountPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/about" component={AboutPage} />
        </Switch>
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashBoard;
