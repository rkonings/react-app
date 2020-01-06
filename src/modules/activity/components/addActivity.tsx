import React from 'react';
import dotProp from 'dot-prop';

import { Button, TextButton } from 'react-ui/build/Button';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import {
    PopupContent,
    PopupFooter,
    PopupHeader,
} from 'react-ui/build/Popup/Popup';
import PopupInput from 'react-ui/build/CombinedInput/PopupInput';
import { ValidationSchema } from '../';
import { InputField, ChangedItem, ChangeOptions } from 'react-ui/build/Form';
import TextField from 'react-ui/build/Input/TextField/TextField';
import { Activity } from 'react-ui/build/Activity/Activity';

import { useCreateActivityMutation, Client, ClientDocument } from '../../hooks';

interface AddActivity {
    onAdded?: () => void;
    clientId: string;
}

export const AddActivity = ({ onAdded, clientId }: AddActivity) => {
    const [createActivity] = useCreateActivityMutation();

    const onChangeHandler = (
        items: ChangedItem[],
        _?: ChangeOptions | undefined,
        callBack?: (() => void) | undefined
    ) => {
        const update = items.reduce((obj, item) => {
            dotProp.set(obj, item.field, item.value);
            return obj;
        }, {});

        // console.log(items);

        const activity = {
            title: '',
            type: 'call',
            client: clientId,
        };

        createActivity({
            variables: { activity: { ...activity, ...update } },
            refetchQueries: [
                { query: ClientDocument, variables: { _id: clientId } },
            ],
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
        <PopupInput<Omit<Activity, '_id'>>
            link={<Button type="primary">Add activity</Button>}
            onChange={onChangeHandler}
            position="BOTTOM"
            width="400px"
            validationSchema={ValidationSchema}
            values={{
                type: '',
                notes: '',
                creationDate: new Date(),
                title: '',
            }}
        >
            {({ errors, onCancel, onChange, onSave, values }) => (
                <React.Fragment>
                    <PopupHeader>Add activity</PopupHeader>
                    <PopupContent>
                        <InputField>
                            <TextField
                                value={values.title}
                                label="Title"
                                grow={true}
                                placeHolder="Title"
                                onChange={e =>
                                    onChange('title', e.currentTarget.value)
                                }
                                errorText={errors.get('title')}
                            />
                        </InputField>
                        <InputField>
                            <TextField
                                value={values.notes}
                                label="Notes"
                                grow={true}
                                placeHolder="Notes"
                                onChange={e =>
                                    onChange('notes', e.currentTarget.value)
                                }
                                errorText={errors.get('notes')}
                            />
                        </InputField>
                        <InputField>
                            <TextField
                                value={values.type}
                                label="type"
                                grow={true}
                                placeHolder="type"
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
