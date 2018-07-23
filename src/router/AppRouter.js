import {Router,Switch,Route} from 'react-router-dom'
import React from 'react'
import StudentDashboardPage from './../components/StudentDashboardPage'
import StudentCreatePage from './../components/StudentCreatePage'
import StudentEditPage from './../components/StudentEditPage'
import StudentHelpPage from './../components/StudentHelpPage'

import PageNotFound from './../components/PageNotFound'
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter=() =>(
  <Router history = {history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={StudentDashboardPage} />
        <PrivateRoute path="/create" component={StudentCreatePage} />
        <PrivateRoute path="/edit/:id" component={StudentEditPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>

);
export default AppRouter;
