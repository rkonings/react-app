import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<div>
			<NavLink to="/">Dashboard</NavLink>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/clients">Clients</NavLink>
		</div>
	);
};
