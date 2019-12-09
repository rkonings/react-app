import React from 'react';

import { OnChangeHandler } from 'react-ui/build/Form';
import { ValidationErrors, Yup } from 'react-ui/build/Validation';
import { Section, SettingsField } from 'react-ui/build/SettingsField';

import Checkbox from 'react-ui/build/Input/Checkbox/Checkbox';
import Switch from 'react-ui/build/Input/Switch/Switch';

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

interface Privacy {
    user: User;
    onChange: OnChangeHandler;
    errors: ValidationErrors;
    validationSchema: Yup.ObjectSchema;
}

const Privacy = ({ user, onChange }: Privacy) => {
    return (
        <React.Fragment>
            <Section>
                <SettingsField
                    label="Enable push notifications"
                    description="Include a link at the bottom of your emails allowing recipients to unsubscribe. It will help you stay compliant with local spam laws and improve deliverability."
                    input={
                        <Checkbox
                            onChange={value =>
                                onChange([
                                    {
                                        field: 'settings.pushNotifications',
                                        value,
                                    },
                                ])
                            }
                            checked={user.settings.pushNotifications}
                            size="xl"
                        />
                    }
                />
                <SettingsField
                    label="Include a link to unscribe to all email"
                    description="Include a link at the bottom of your emails allowing recipients to unsubscribe. It will help you stay compliant with local spam laws and improve deliverability."
                    input={
                        <Switch
                            checked={user.settings.unscribeEmailLink}
                            onChange={value =>
                                onChange([
                                    {
                                        field: 'settings.unscribeEmailLink',
                                        value,
                                    },
                                ])
                            }
                        />
                    }
                />
            </Section>
        </React.Fragment>
    );
};

export default Privacy;
