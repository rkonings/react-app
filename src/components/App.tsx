import React from 'react';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from './ApolloClient';
import Router from './Router';
import GlobalStyle from 'react-ui/build/GlobalStyle';

class App extends React.PureComponent {
    render() {
        return (
            <ApolloProvider client={ApolloClient}>
                <ThemeProvider theme={defaultTheme}>
                    <React.Fragment>
                        <GlobalStyle />
                        <Router />
                    </React.Fragment>
                </ThemeProvider>
            </ApolloProvider>
        );
    }
}

export default App;
