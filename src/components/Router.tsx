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

const SecureRoutes = (
    <Switch>
        <Route key="dashboard" path="/" exact={true} component={Dashboard} />
        <Route
            key="clients-filter"
            path="/clients/:filter/"
            component={Clients}
        />
        <Route key="clients" path="/clients" component={Clients} />
        <Route key="client-id" path="/client/:id/" component={Client} />
        <Route key="inbox" path="/inbox" exact={true} component={Inbox} />
        <Route key="agenda" path="/agenda" exact={true} component={Agenda} />
        <Route
            key="project-management"
            path="/project-management"
            exact={true}
            component={ProjectManagement}
        />
        <Route key="settings" path="/settings" component={Settings} />
        <Route
            key="time-management"
            path="/time-management"
            exact={true}
            component={TimeManagement}
        />
        <Route key="invoice" path="/invoice" exact={true} component={Invoice} />
        <Route component={NotFound} />
    </Switch>
);

const Routes = (
    <Switch>
        <Route key="login" path="/login" exact={true} component={Login} />
        <Route component={NotFound} />
    </Switch>
);

export default () => {
    return (
        <Router>
            {localStorage.getItem('token') ? SecureRoutes : Routes}
            <Route component={NotFound} />
        </Router>
    );
};
