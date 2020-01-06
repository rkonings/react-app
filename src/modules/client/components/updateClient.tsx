import React from 'react';
import dotProp from 'dot-prop';

import { Button, TextButton } from 'react-ui/build/Button';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import {
    PopupContent,
    PopupFooter,
    PopupHeader,
} from 'react-ui/build/Popup/Popup';
import { PopupCoreInput } from 'react-ui/build/CombinedInput/PopupInput';
import { ValidationSchema, useUpdateClient } from '../';
import { InputField, ChangedItem, ChangeOptions } from 'react-ui/build/Form';
import TextField from 'react-ui/build/Input/TextField/TextField';
import { PopoverFooter } from 'react-ui/build/Popover/Popover';
import { useClientQuery, Client, Activity, Maybe } from '../../hooks';

interface UpdateClient {
    _id: string;
    close: () => void;
}

interface UpdateClientValues extends Omit<Client, 'activities' | 'user'> {
    activities: Maybe<Array<Maybe<Omit<Activity, 'user' | 'client'>>>>;
}

export const UpdateClient = ({ _id, close }: UpdateClient) => {
    const [updateClient] = useUpdateClient({ onCompleted: () => close() });

    const { data, loading } = useClientQuery({
        variables: { _id },
        fetchPolicy: 'network-only',
    });

    const onChangeHandler = (
        items: ChangedItem[],
        _?: ChangeOptions | undefined,
        __?: (() => void) | undefined
    ) => {
        const update = items.reduce((obj, item) => {
            dotProp.set(obj, item.field, item.value);
            return obj;
        }, {});

        ValidationSchema.validate(update, { stripUnknown: true }).then(
            client => {
                updateClient({ variables: { client: { ...client, _id } } });
            }
        );
    };
    return (
        <React.Fragment>
            {loading && <h1>Loading</h1>}
            {!loading && data && data.client && (
                <PopupCoreInput<UpdateClientValues>
                    validationSchema={ValidationSchema}
                    values={data.client}
                    clickAway={close}
                    onChange={onChangeHandler}
                >
                    {({ errors, onCancel, onChange, onSave, values }) => (
                        <React.Fragment>
                            <PopupHeader>Header</PopupHeader>
                            <PopupContent>
                                <InputField>
                                    <TextField
                                        value={values.name}
                                        label="Name"
                                        grow={true}
                                        placeHolder="Name"
                                        onChange={e =>
                                            onChange(
                                                'name',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('name')}
                                    />
                                </InputField>
                                <InputField>
                                    <TextField
                                        value={values.address}
                                        label="Address"
                                        grow={true}
                                        placeHolder="Address"
                                        onChange={e =>
                                            onChange(
                                                'address',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('address')}
                                    />
                                </InputField>
                                <InputField>
                                    <TextField
                                        value={values.zipcode}
                                        label="zipcode"
                                        grow={true}
                                        placeHolder="Zipcode"
                                        onChange={e =>
                                            onChange(
                                                'zipcode',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('zipcode')}
                                    />
                                </InputField>
                                <InputField>
                                    <TextField
                                        value={values.city}
                                        label="City"
                                        grow={true}
                                        placeHolder="City"
                                        onChange={e =>
                                            onChange(
                                                'city',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('city')}
                                    />
                                </InputField>
                                <InputField>
                                    <TextField
                                        value={values.telephone}
                                        label="Telephone"
                                        grow={true}
                                        placeHolder="Telephone"
                                        onChange={e =>
                                            onChange(
                                                'telephone',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('telephone')}
                                    />
                                </InputField>
                                <InputField>
                                    <TextField
                                        value={values.type}
                                        label="Type"
                                        grow={true}
                                        placeHolder="Type"
                                        onChange={e =>
                                            onChange(
                                                'type',
                                                e.currentTarget.value
                                            )
                                        }
                                        errorText={errors.get('type')}
                                    />
                                </InputField>
                            </PopupContent>
                            <PopoverFooter>
                                <PopupFooter>
                                    <ButtonGroup>
                                        <TextButton
                                            onClick={() => onCancel(close)}
                                        >
                                            Cancel
                                        </TextButton>
                                        <Button
                                            onClick={() => onSave()}
                                            type="primary"
                                        >
                                            Save
                                        </Button>
                                    </ButtonGroup>
                                </PopupFooter>
                            </PopoverFooter>
                        </React.Fragment>
                    )}
                </PopupCoreInput>
            )}
        </React.Fragment>
    );
};
