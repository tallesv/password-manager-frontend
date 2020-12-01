import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewPassword from '../pages/NewPassword';
import EditPassword from '../pages/EditPassword';

function Routes() {
  return (
  <Switch>
    <Route path="/signIn" component={SignIn}/>
    <Route path="/signUp" component={SignUp}/>
    <Route path="/newPassword" component={NewPassword}/>
    <Route path="/editPassword" component={EditPassword}/>
    <Route path="/" component={Dashboard}/>
  </Switch>
  )
}

export default Routes;