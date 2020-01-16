import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';
import { useAuth } from '../../modules/auth';

export default () => {
    const { logout } = useAuth();

    return (
        <React.Fragment>
            <Basic left={<Navigation />} pageTitle="Dashboard">
                <div>Dashboard</div>
                <button
                    onClick={() => {
                        logout();
                    }}
                >
                    Logout
                </button>
            </Basic>
        </React.Fragment>
    );
};
