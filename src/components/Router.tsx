import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Clients from './pages/Ciients';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const SecureRoutes = [
	<Route path="/" exact={true} component={Dashboard} />,
	<Route path="/clients" exact={true} component={Clients} />
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
