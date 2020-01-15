import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Navigation, NavigationItem } from 'react-ui/build/Navigation';
import {
    Home,
    Inbox,
    Clients,
    Agenda,
    ProjectManagement,
    Invoices,
    TimeManagement,
} from 'react-ui/build/Icon';

export default () => {
    const history = useHistory();

    return (
        <Navigation>
            <NavigationItem
                onClick={() => history.push('/')}
                isActive={!!useRouteMatch({ path: '/', exact: true })}
                icon={<Home />}
            >
                Dashboard
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/settings')}
                icon={<Home />}
                isActive={!!useRouteMatch('/settings')}
            >
                Settings
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/inbox')}
                icon={<Inbox />}
                isActive={!!useRouteMatch('/inbox')}
            >
                Inbox
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/clients')}
                icon={<Clients />}
                isActive={
                    !!useRouteMatch('/clients') || !!useRouteMatch('/client')
                }
            >
                Clients
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/agenda')}
                icon={<Agenda />}
                isActive={!!useRouteMatch('/agenda')}
            >
                Agenda
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/project-management')}
                icon={<ProjectManagement />}
                isActive={!!useRouteMatch('/project-management')}
            >
                Project management
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/invoice')}
                icon={<Invoices />}
                isActive={!!useRouteMatch('/invoice')}
            >
                Invoices
            </NavigationItem>
            <NavigationItem
                onClick={() => history.push('/time-management')}
                icon={<TimeManagement />}
                isActive={!!useRouteMatch('/time-management')}
            >
                Time management
            </NavigationItem>
        </Navigation>
    );
};
