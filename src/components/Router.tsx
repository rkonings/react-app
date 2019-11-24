import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Clients from './pages/Ciients';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Inbox from './pages/Inbox';

const SecureRoutes = [
	<Route path="/" exact={true} component={Dashboard} />,
	<Route path="/clients" exact={true} component={Clients} />,
	<Route path="/inbox" exact={true} component={Inbox} />
];

const Routes = [
	<Route path="/login" exact={true} component={Login} />
];

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
