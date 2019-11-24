import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';

export default () => {
	return (
		<React.Fragment>
			<Basic
				pageTitle="Clients management"
				left={<Navigation />}
			>
				<div>Data</div>
			</Basic>
		</React.Fragment>
	);
};
