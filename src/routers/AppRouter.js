import React from 'react';
import { Router ,Route, Switch,Link,NavLink} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotFound from '../components/NotFoundPage';
import AddExpansePage from '../components/AddExpansePage';
import EditExpansePage from '../components/EditExpansePage';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createBrowserHistory();
const AppRouter=()=> (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpanseDashboardPage}/>
                <PrivateRoute path="/creat" component={AddExpansePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpansePage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);
export default AppRouter;