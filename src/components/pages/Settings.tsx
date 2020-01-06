import dotProp from 'dot-prop';
import React from 'react';
import Basic from 'react-ui/build/Layout/Basic';
import Navigation from '../Navigation';

import { ChangedItem, ChangeOptions } from 'react-ui/build/Form';
import Tab, { TabContent } from 'react-ui/build/Tab/Tab';
import BasicInfo from '../../components/Settings/BasicInfo';
import Companies from '../../components/Settings/Companies';
import Privacy from '../../components/Settings/Privacy';

import {
    User,
    UserDocument,
    useUpdateUserMutation,
    useUserQuery,
} from '../../modules/hooks';

import { ValidationSchema } from '../../modules/user';

const Settings = () => {
    const { data } = useUserQuery({
        fetchPolicy: 'cache-only',
    });

    const [user, setUser] = React.useState<Omit<User, 'password'>>();

    const [updateUser] = useUpdateUserMutation({
        refetchQueries: [{ query: UserDocument }],
        onCompleted: data => {
            if (data && data.updateUser) {
                setUser(data.updateUser);
            }
        },
    });

    React.useEffect(() => {
        if (data && data.user) {
            setUser(data.user);
        }
    }, [data]);

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

    return (
        <React.Fragment>
            <Basic pageTitle="Settings" left={<Navigation />}>
                {user && (
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
                )}
            </Basic>
        </React.Fragment>
    );
};

export default Settings;
