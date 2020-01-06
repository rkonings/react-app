import dotProp from 'dot-prop';
import React from 'react';

import { Button, TextButton } from 'react-ui/build/Button';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import PopupInput from 'react-ui/build/CombinedInput/PopupInput';
import { ChangedItem, ChangeOptions, InputField } from 'react-ui/build/Form';
import TextField from 'react-ui/build/Input/TextField/TextField';
import {
    PopupContent,
    PopupFooter,
    PopupHeader,
} from 'react-ui/build/Popup/Popup';
import { ValidationSchema } from '../';
import { Client, ClientsDocument, useCreateClientMutation } from '../../hooks';

interface AddClient {
    onAdded?: () => void;
}

export const AddClient = ({ onAdded }: AddClient) => {
    const [addClient] = useCreateClientMutation({});

    const onChangeHandler = (
        items: ChangedItem[],
        _?: ChangeOptions | undefined,
        callBack?: (() => void) | undefined
    ) => {
        const update = items.reduce((obj, item) => {
            dotProp.set(obj, item.field, item.value);
            return obj;
        }, {});

        addClient({
            variables: { client: update },
            refetchQueries: [{ query: ClientsDocument }],
            update: () => {
                if (callBack) {
                    callBack();
                }
                if (onAdded) {
                    onAdded();
                }
            },
        });
    };
    return (
        <PopupInput<Omit<Client, '_id' | 'user' | 'activities'>>
            link={<Button type="primary">Add client</Button>}
            onChange={onChangeHandler}
            width="400px"
            validationSchema={ValidationSchema}
            values={{
                name: '',
                address: '',
                city: '',
                telephone: '',
                type: '',
                zipcode: '',
            }}
        >
            {({ errors, onCancel, onChange, onSave, values }) => (
                <React.Fragment>
                    <PopupHeader>Add client</PopupHeader>
                    <PopupContent>
                        <InputField>
                            <TextField
                                value={values.name}
                                label="Name"
                                grow={true}
                                placeHolder="Name"
                                onChange={e =>
                                    onChange('name', e.currentTarget.value)
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
                                    onChange('address', e.currentTarget.value)
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
                                    onChange('zipcode', e.currentTarget.value)
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
                                    onChange('city', e.currentTarget.value)
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
                                    onChange('telephone', e.currentTarget.value)
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
                                    onChange('type', e.currentTarget.value)
                                }
                                errorText={errors.get('type')}
                            />
                        </InputField>
                    </PopupContent>
                    <PopupFooter>
                        <ButtonGroup>
                            <TextButton onClick={() => onCancel()}>
                                Cancel
                            </TextButton>
                            <Button onClick={() => onSave()} type="primary">
                                Save
                            </Button>
                        </ButtonGroup>
                    </PopupFooter>
                </React.Fragment>
            )}
        </PopupInput>
    );
};
