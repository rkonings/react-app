import React from 'react';
import Login from 'react-ui/build/UI/Login';
import { useAuth, AuthCredentials } from '../modules/auth';

export default () => {
    const { login } = useAuth();

    const onLogin = ({ email, password }: AuthCredentials) => {
        login({ email, password });
    };

    return <Login onLogin={onLogin} />;
};
