import {Router,Switch,Route} from 'react-router-dom'
import React from 'react'
import StudentDashboardPage from './../components/StudentDashboardPage'
import StudentCreatePage from './../components/StudentCreatePage'
import StudentEditPage from './../components/StudentEditPage'
import StudentHelpPage from './../components/StudentHelpPage'
import Header from './../components/Header'
import PageNotFound from './../components/PageNotFound'
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter=() =>(
  <Router history = {history}>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={StudentDashboardPage} />
        <Route path="/create" component={StudentCreatePage} />
        <Route path="/edit/:id" component={StudentEditPage} />
        <Route path="/help" component={StudentHelpPage} /> />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>

);
export default AppRouter;
