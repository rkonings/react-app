// npm link react-ui
// cd ../../react-ui/react-ui && npm link ../../react-app/react-app/node_modules/react && npm link ../../react-app/react-app/node_modules/react-dom

import React from 'react';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from './ApolloClient';
import Router from './Router';

class App extends React.PureComponent {
	render() {
		return (
			<ApolloProvider client={ApolloClient}>
				<ThemeProvider theme={defaultTheme}>
					<Router />
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

export default App;