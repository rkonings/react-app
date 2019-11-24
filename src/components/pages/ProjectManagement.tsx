import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';

export default () => {
	return (
		<React.Fragment>
			<Basic
				left={<Navigation/>}
				pageTitle="Project management"
			>
				<div>Project management</div>
			</Basic>
		</React.Fragment>
	);
};
