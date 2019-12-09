import React from 'react';

import Basic from 'react-ui/build/Layout/Basic';
import Navigation from '../Navigation';


const Settings = () => {
    return (
		<React.Fragment>
			<Basic
				pageTitle="Settings"
				left={<Navigation />}
			>
                <div>Settings</div>
			</Basic>
		</React.Fragment>
	);
}

export default Settings;
