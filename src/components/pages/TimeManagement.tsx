import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';
import { AddTime } from '../../modules/time/components/addTime';

export default () => {
    return (
        <React.Fragment>
            <Basic left={<Navigation />} pageTitle="Time management">
                <div>Time management</div>
                <AddTime />
            </Basic>
        </React.Fragment>
    );
};
