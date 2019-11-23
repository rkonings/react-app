import React from 'react';
import Navigation from '../Navigation';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default () => {

	const LOGIN_MUTATION = gql`
        mutation {
            login(email: "randy@randykonings.nl", password: "randykonings") {
                token
            }
        }
	`;

	const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

	React.useEffect(() => {
		login();
	}, []);

	if (data) {
		const { token } = data.login;
		localStorage.setItem('token', token);
	}

	return (
		<React.Fragment>
			<Navigation />
			<div>Login page</div>
		</React.Fragment>
	);
};
