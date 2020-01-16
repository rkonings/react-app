import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { User } from '../hooks';
import React from 'react';

const LOGIN_QUERY = gql`
    mutation LOGIN($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

interface AuthContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    hasToken: boolean;
    login: (credentials: AuthCredentials) => void;
    logout: () => void;
}

export const AuthContext = React.createContext<AuthContext>({} as AuthContext);

interface AuthProvider {
    children: JSX.Element | JSX.Element[];
}

export interface AuthCredentials {
    password: string;
    email: string;
}

export const AuthProvider = ({ children }: AuthProvider) => {
    const client = useApolloClient();
    const [user, setUser] = React.useState<User | null>(null);
    const [hasToken, setHasToken] = React.useState<boolean>(!!getToken());

    const [_login] = useMutation(LOGIN_QUERY, {
        onCompleted: data => {
            localStorage.setItem('token', data.login.token);
            setHasToken(true);
        },
    });

    const login = ({ email, password }: AuthCredentials) => {
        _login({ variables: { email, password } });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setHasToken(false);
        client.resetStore();
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                user,
                setUser,
                logout,
                hasToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getAuthorizationHeader = () => {
    const token = getToken();
    const authorization = token ? `Bearer ${token}` : '';
    return { authorization };
};

interface Authenticated {
    children: JSX.Element;
    login: JSX.Element;
}
export const Authenticated = ({ children, login }: Authenticated) => {
    const { hasToken } = useAuth();
    if (!hasToken) {
        return login;
    }
    return children;
};
