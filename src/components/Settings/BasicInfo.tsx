import React from 'react';

import { Edit } from 'react-ui/build/Icon';

import { OnChangeHandler } from 'react-ui/build/Form';
import { Section, SettingsField } from 'react-ui/build/SettingsField';
import { ValidationErrors, Yup } from 'react-ui/build/Validation';

import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import { PopoverInput } from 'react-ui/build/CombinedInput/PopoverInput';
import PopupInput from 'react-ui/build/CombinedInput/PopupInput';
import Checkbox from 'react-ui/build/Input/Checkbox/Checkbox';
import Select from 'react-ui/build/Input/Select/Select';
import Switch from 'react-ui/build/Input/Switch/Switch';
import TextField from 'react-ui/build/Input/TextField/TextField';
import {
    PopupContent,
    PopupFooter,
    PopupHeader,
} from 'react-ui/build/Popup/Popup';

import { InputField } from 'react-ui/build/Form';

import { PopoverFooter } from 'react-ui/build/Popover/Popover';

import { Button } from 'react-ui/build/Button';
import TextButton from 'react-ui/build/Button/TextButton';
import { User } from '../../modules/hooks';

export interface UserSettings {
    language: string;
    dateFormat: string;
    pushNotifications: boolean;
    unscribeEmailLink: boolean;
    signature: string;
}

interface BasicInfo {
    user: Omit<User, 'password'>;
    onChange: OnChangeHandler;
    errors: ValidationErrors;
    validationSchema: Yup.ObjectSchema;
}

const BasicInfo = ({ user, onChange, errors, validationSchema }: BasicInfo) => {
    return (
        <React.Fragment>
            <Section>
                <PopoverInput<{ firstName: string; lastName: string }>
                    values={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }}
                    link={() => (
                        <TextButton isIcon={true}>
                            <Edit />
                        </TextButton>
                    )}
                    validationSchema={validationSchema}
                    onChange={onChange}
                    errors={errors}
                    label={values => `${values.firstName} ${values.lastName}`}
                >
                    {({ errors, values, onChange, onSave, onCancel }) => (
                        <React.Fragment>
                            <InputField>
                                <TextField
                                    value={values.firstName}
                                    width="200px"
                                    placeHolder="Firstname"
                                    onChange={e =>
                                        onChange(
                                            'firstName',
                                            e.currentTarget.value
                                        )
                                    }
                                    errorText={errors.get('firstName')}
                                />
                            </InputField>
                            <InputField>
                                <TextField
                                    value={values.lastName}
                                    width="200px"
                                    placeHolder="LastName"
                                    onChange={e =>
                                        onChange(
                                            'lastName',
                                            e.currentTarget.value
                                        )
                                    }
                                    errorText={errors.get('lastName')}
                                />
                            </InputField>
                            <PopoverFooter>
                                <ButtonGroup>
                                    <TextButton onClick={() => onCancel()}>
                                        Cancel
                                    </TextButton>
                                    <Button
                                        onClick={() => onSave()}
                                        type="primary"
                                    >
                                        Save
                                    </Button>
                                </ButtonGroup>
                            </PopoverFooter>
                        </React.Fragment>
                    )}
                </PopoverInput>
                <InputField>
                    <Select
                        width="400px"
                        label="Language"
                        options={['Netherlands', 'UK']}
                        value={user.settings.language}
                        onChange={value =>
                            onChange([{ field: 'settings.language', value }])
                        }
                        errorText={errors.get('settings.language')}
                    />
                </InputField>
                <InputField>
                    <Select
                        width="400px"
                        label="Date &amp; number format"
                        options={['Netherlands', 'UK']}
                        value={user.settings.dateFormat}
                        helperText="Format: 4 december 2019, 04-12-2019, and 1.234,56"
                        onChange={value =>
                            onChange([{ field: 'settings.dateFormat', value }])
                        }
                        errorText={errors.get('settings.dateFormat')}
                    />
                </InputField>
            </Section>
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
                <SettingsField
                    label="Security"
                    description="Change your e-mail address"
                    input={
                        <PopupInput<{ email: string }>
                            link={<Button>Change</Button>}
                            onChange={onChange}
                            validationSchema={validationSchema}
                            values={{
                                email: user.email,
                            }}
                        >
                            {({
                                errors,
                                values,
                                onChange,
                                onSave,
                                onCancel,
                            }) => (
                                <React.Fragment>
                                    <PopupHeader>
                                        Change email address
                                    </PopupHeader>
                                    <PopupContent>
                                        <InputField>
                                            <TextField
                                                value={values.email}
                                                width="200px"
                                                inputType="email"
                                                onChange={e =>
                                                    onChange(
                                                        'email',
                                                        e.currentTarget.value
                                                    )
                                                }
                                                errorText={errors.get('email')}
                                            />
                                        </InputField>
                                    </PopupContent>
                                    <PopupFooter>
                                        <ButtonGroup>
                                            <TextButton
                                                onClick={() => onCancel()}
                                            >
                                                cancel
                                            </TextButton>
                                            <Button
                                                type="primary"
                                                onClick={() => onSave()}
                                            >
                                                Save
                                            </Button>
                                        </ButtonGroup>
                                    </PopupFooter>
                                </React.Fragment>
                            )}
                        </PopupInput>
                    }
                />
            </Section>
        </React.Fragment>
    );
};

export default BasicInfo;
