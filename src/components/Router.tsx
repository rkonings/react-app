import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Clients from './pages/Ciients';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Inbox from './pages/Inbox';
import Agenda from './pages/Agenda';
import ProjectManagement from './pages/ProjectManagement';
import Invoice from './pages/Invoice';
import TimeManagement from './pages/TimeManagement';
import Settings from './pages/Settings';
import Client from './pages/Client';

const SecureRoutes = [
    <Route path="/" exact={true} component={Dashboard} />,
    <Route path="/clients/:filter/" component={Clients} />,
    <Route path="/clients" component={Clients} />,
    <Route path="/client/:id/" component={Client} />,
    <Route path="/inbox" exact={true} component={Inbox} />,
    <Route path="/agenda" exact={true} component={Agenda} />,
    <Route
        path="/project-management"
        exact={true}
        component={ProjectManagement}
    />,
    <Route path="/settings" component={Settings} />,
    <Route path="/time-management" exact={true} component={TimeManagement} />,
    <Route path="/invoice" exact={true} component={Invoice} />,
];

const Routes = [<Route path="/login" exact={true} component={Login} />];

export default () => {
    return (
        <Router>
            <Switch>
                {localStorage.getItem('token') ? SecureRoutes : Routes}
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};
