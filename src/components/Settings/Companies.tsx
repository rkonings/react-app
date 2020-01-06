import React from 'react';

import { OnChangeHandler } from 'react-ui/build/Form';
import { ValidationErrors, Yup } from 'react-ui/build/Validation';
import { Section, SettingsField } from 'react-ui/build/SettingsField';

import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import {
    PopupContent,
    PopupFooter,
    PopupHeader,
} from 'react-ui/build/Popup/Popup';
import PopupInput from 'react-ui/build/CombinedInput/PopupInput';
import TextField from 'react-ui/build/Input/TextField/TextField';

import { InputField } from 'react-ui/build/Form';

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

interface Companies {
    user: Omit<User, 'password'>;
    onChange: OnChangeHandler;
    errors: ValidationErrors;
    validationSchema: Yup.ObjectSchema;
}

const Companies = ({ user, onChange, validationSchema }: Companies) => {
    return (
        <React.Fragment>
            <Section>
                <SettingsField
                    label="Import companies"
                    description="Import your companies"
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
                                    <PopupHeader>Import</PopupHeader>
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

                <SettingsField
                    label="Manage properties"
                    description="Manage the company properties"
                    input={
                        <PopupInput<{ email: string }>
                            link={<Button>Manage</Button>}
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
                                        Company properties
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

                <SettingsField
                    label="Manage labels"
                    description="Manage your labels"
                    input={
                        <PopupInput<{ email: string }>
                            link={<Button>Manage</Button>}
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
                                    <PopupHeader>Labels</PopupHeader>
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

export default Companies;
