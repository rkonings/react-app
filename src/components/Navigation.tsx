import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Navigation, NavigationItem } from 'react-ui/build/Navigation';
import { Home, Inbox, Clients, Agenda, ProjectManagement, Invoices, TimeManagement } from 'react-ui/build/Icon';

export default () => {

	const history = useHistory();
	return (
		<Navigation>
			<NavigationItem onClick={() => history.push('/')} icon={<Home />}>Dashboard</NavigationItem>
			<NavigationItem onClick={() => history.push('/settings')} icon={<Home />}>Settings</NavigationItem>
			<NavigationItem onClick={() => history.push('/inbox')} icon={<Inbox />}>Inbox</NavigationItem>
			<NavigationItem onClick={() => history.push('/clients')} icon={<Clients />}>Clients</NavigationItem>
			<NavigationItem onClick={() => history.push('/agenda')} isActive={true} icon={<Agenda />}>Agenda</NavigationItem>
			<NavigationItem onClick={() => history.push('/project-management')} icon={<ProjectManagement />}>Project management</NavigationItem>
			<NavigationItem onClick={() => history.push('/invoice')} icon={<Invoices />}>Invoices</NavigationItem>
			<NavigationItem onClick={() => history.push('/time-management')} icon={<TimeManagement />}>Time management</NavigationItem>
		</Navigation>
	);
};
