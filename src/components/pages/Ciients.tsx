import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';

export default () => {
	return (
		<React.Fragment>
			<Basic left={<Navigation />}>
				<h1>Clients</h1>
			</Basic>
		</React.Fragment>
	);
};
