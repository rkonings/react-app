import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import GlobalStyle from 'react-ui/build/GlobalStyle';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import ApolloClient from './ApolloClient';
import { PortalProvider } from 'react-ui/build/Portal/Portal';
import Router from './Router';
import { AuthProvider, Authenticated } from '../modules/auth';
import Login from '../components/Login';
import { DataLoader } from '../modules/dataLoader';

const App = () => {
    return (
        <ApolloProvider client={ApolloClient}>
            <AuthProvider>
                <ThemeProvider theme={defaultTheme}>
                    <Authenticated login={<Login />}>
                        <DataLoader>
                            <PortalProvider>
                                <React.Fragment>
                                    <GlobalStyle />
                                    <Router />
                                </React.Fragment>
                            </PortalProvider>
                        </DataLoader>
                    </Authenticated>
                </ThemeProvider>
            </AuthProvider>
        </ApolloProvider>
    );
};

export default App;
