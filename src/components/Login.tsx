import React from 'react';
import Login, { LoginValues } from 'react-ui/build/UI/Login';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

const LOGIN_QUERY = gql`
    mutation LOGIN($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }
`;

export default () => {
	const [login, { data }] = useMutation(LOGIN_QUERY);
	const history = useHistory();

	if (data) {
		localStorage.setItem('token', data.login.token);
		history.push('/');
	}

	const onLogin = ({email, password}: LoginValues) => {
		console.log(email, password);
		login({variables: {email, password}});
	};

	return (
		<Login onLogin={onLogin} />
	);
};
