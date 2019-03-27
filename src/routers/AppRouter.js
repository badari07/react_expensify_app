import React from 'react';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFoundPage';
import AddExpansePage from '../components/AddExpansePage';
import EditExpansePage from '../components/EditExpansePage';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import HelpPage from '../components/HelpPage';


const AppRouter=()=> (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpanseDashboardPage} exact={true}/>
                <Route path="/creat" component={AddExpansePage}/>
                <Route path="/edit/:id" component={EditExpansePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;