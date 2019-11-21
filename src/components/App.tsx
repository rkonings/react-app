import React from 'react';
import defaultTheme from 'react-ui/build/themes/default';
import ThemeProvider from 'react-ui/build/themes/Provider';
import Login, { LoginValues } from 'react-ui/build/UI/Login';
import Basic from 'react-ui/build/Layout/Basic';

class App extends React.PureComponent {

	onLogin(values: LoginValues) {
		console.log(values);
	}
	render() {
		return (
			<ThemeProvider theme={defaultTheme}>
				<Basic>
					<Login onLogin={this.onLogin} />
				</Basic>
			</ThemeProvider>
		);
	}
}

export default App;