import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Clients from './pages/Ciients';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

export default () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true} component={Dashboard} />
				<Route path="/clients" exact={true} component={Clients} />
				<Route path="/login" exact={true} component={Login} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};
