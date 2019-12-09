import React from 'react';

import Basic from 'react-ui/build/Layout/Basic';
import Navigation from '../Navigation';

import { ChangedItem, ChangeOptions } from 'react-ui/build/Form';
import { Yup } from 'react-ui/build/Validation';
import BasicInfo from '../../components/Settings/BasicInfo';
import Companies from '../../components/Settings/Companies';
import Privacy from '../../components/Settings/Privacy';
import Tab, { TabContent } from 'react-ui/build/Tab/Tab';

export interface UserSettings {
    language: string;
    dateFormat: string;
    pushNotifications: boolean;
    unscribeEmailLink: boolean;
    signature: string;
}

export interface User {
    firstName: string;
    lastName: string;
    settings: UserSettings;
    password: string;
    email: string;
}

const UserSchema = Yup.object({
    firstName: Yup.string().required('is required'),
    lastName: Yup.string().required('field is required'),
    password: Yup.string().required('password is required'),
    email: Yup.string().required('email is required'),
    settings: Yup.object({
        language: Yup.string().required('is required'),
        dateFormat: Yup.string().required('is required'),
        pushNotifications: Yup.boolean().required('is required'),
    }),
});

const user = {
    firstName: 'Randy',
    lastName: 'Konings',
    password: 'randykonings',
    email: 'randy@randykonings.nl',
    settings: {
        language: 'UK',
        dateFormat: 'UK',
        pushNotifications: true,
        unscribeEmailLink: true,
        signature: 'This is a faker signature. Really cool!',
    },
};

const onChange = (
    items: ChangedItem[],
    options?: ChangeOptions | undefined,
    callBack?: (() => void) | undefined
) => {
    console.log(items, options);

    if (callBack) {
        callBack();
    }
};

const Settings = () => {
    return (
        <React.Fragment>
            <Basic pageTitle="Settings" left={<Navigation />}>
                <Tab active="profile">
                    <TabContent id="profile" label="Profile">
                        <BasicInfo
                            user={user}
                            validationSchema={UserSchema}
                            errors={new Map()}
                            onChange={onChange}
                        />
                    </TabContent>
                    <TabContent id="companies" label="Companies">
                        <Companies
                            user={user}
                            validationSchema={UserSchema}
                            errors={new Map()}
                            onChange={onChange}
                        />
                    </TabContent>
                    <TabContent id="privacy" label="Privacy">
                        <Privacy
                            user={user}
                            validationSchema={UserSchema}
                            errors={new Map()}
                            onChange={onChange}
                        />
                    </TabContent>
                </Tab>
            </Basic>
        </React.Fragment>
    );
};

export default Settings;
