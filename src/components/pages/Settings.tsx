import React from 'react';
import dotProp from 'dot-prop';
import Basic from 'react-ui/build/Layout/Basic';
import Navigation from '../Navigation';

import { ChangedItem, ChangeOptions } from 'react-ui/build/Form';
import BasicInfo from '../../components/Settings/BasicInfo';
import Companies from '../../components/Settings/Companies';
import Privacy from '../../components/Settings/Privacy';
import Tab, { TabContent } from 'react-ui/build/Tab/Tab';

import {
    useUser,
    ValidationSchema,
    useUpdateUser,
    User,
} from '../../modules/user';

// const user = {
//     firstName: 'Randy',
//     lastName: 'Konings',
//     password: 'randykonings',
//     email: 'randy@randykonings.nl',
//     settings: {
//         language: 'UK',
//         dateFormat: 'UK',
//         pushNotifications: true,
//         unscribeEmailLink: true,
//         signature: 'This is a faker signature. Really cool!',
//     },
// };

const Settings = () => {
    const { loading, error, data } = useUser();
    const [updateUser] = useUpdateUser();

    const onChange = (
        items: ChangedItem[],
        _?: ChangeOptions | undefined,
        callBack?: (() => void) | undefined
    ) => {
        const toUpdate = {};
        items.forEach(item => dotProp.set(toUpdate, item.field, item.value));
        updateUser({ variables: { user: toUpdate } });
        if (callBack) {
            callBack();
        }
    };

    if (loading) {
        return <div />;
    }

    const { user } = data;

    return (
        <React.Fragment>
            <Basic pageTitle="Settings" left={<Navigation />}>
                <Tab active="profile">
                    <TabContent id="profile" label="Profile">
                        <BasicInfo
                            user={user}
                            validationSchema={ValidationSchema}
                            errors={new Map()}
                            onChange={onChange}
                        />
                    </TabContent>
                    <TabContent id="companies" label="Companies">
                        <Companies
                            user={user}
                            validationSchema={ValidationSchema}
                            errors={new Map()}
                            onChange={onChange}
                        />
                    </TabContent>
                    <TabContent id="privacy" label="Privacy">
                        <Privacy
                            user={user}
                            validationSchema={ValidationSchema}
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
