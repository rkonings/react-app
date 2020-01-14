import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import GlobalStyle from 'react-ui/build/GlobalStyle';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import { DataLoader } from '../modules/dataLoader';
import ApolloClient from './ApolloClient';
import { PortalProvider } from 'react-ui/build/Portal/Portal';
import Router from './Router';

const App = () => {
    return (
        <ApolloProvider client={ApolloClient}>
            <ThemeProvider theme={defaultTheme}>
                <PortalProvider>
                    <React.Fragment>
                        <GlobalStyle />
                        <DataLoader>
                            <Router />
                        </DataLoader>
                    </React.Fragment>
                </PortalProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
