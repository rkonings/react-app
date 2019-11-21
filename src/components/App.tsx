import React from 'react';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import Basic from 'react-ui/build/Layout/Basic';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from './ApolloClient';

class App extends React.PureComponent {
	render() {
		return (
			<ApolloProvider client={ApolloClient}>
				<ThemeProvider theme={defaultTheme}>
					<Basic>
						<div>Hello World</div>
					</Basic>
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

export default App;