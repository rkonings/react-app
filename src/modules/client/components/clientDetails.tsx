import React from 'react';
import { Client, ValidationSchema, useUpdateClient } from '../';
import {
    ValidationErrors,
    mapValidationErrors,
} from 'react-ui/build/Validation';
import { Title } from 'react-ui/build/Layout/Title';
import { InputField } from 'react-ui/build/Form';
import { InlineEditableTextField } from 'react-ui/build/Input/InlineEditable/InlineEditableTextField';
import dotProp from 'dot-prop';
import Button from 'react-ui/build/Button/Button';

interface ClientDetails {
    className?: string;
    client: Client;
}

export default ({ className, client }: ClientDetails) => {
    const [updateClient] = useUpdateClient();

    const [inputValues, setInputValues] = React.useState<Client>(client);
    const [inputErrors, setInputErrors] = React.useState<ValidationErrors>(
        new Map()
    );
    React.useEffect(() => {
        setInputValues({ ...client });
    }, [client]);

    const onChangeInputField = (
        field: string,
        value: boolean | number | string
    ) => {
        const values: Client = { ...inputValues };
        dotProp.set(values, field, value);
        setInputValues(values);

        ValidationSchema.validateAt(field, values)
            .then(() => {
                const errors = new Map(inputErrors);
                errors.delete(field);
                setInputErrors(errors);
            })
            .catch(error => {
                const errors = mapValidationErrors(error);
                setInputErrors(errors);
            });
    };

    const onSave = () => {
        ValidationSchema.validate(inputValues, {
            stripUnknown: true,
            abortEarly: false,
        })
            .then(values => {
                setInputErrors(new Map());
                updateClient({
                    variables: { client: { ...values } },
                });
            })
            .catch(error => {
                const errors = mapValidationErrors(error);
                setInputErrors(errors);
            });
    };
    return (
        <div className={className}>
            <Title>{inputValues.name}</Title>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.type}
                    label="Type"
                    grow={true}
                    placeHolder="Type"
                    onChange={e =>
                        onChangeInputField('type', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('type')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.telephone}
                    label="Telephone"
                    grow={true}
                    placeHolder="Telephone"
                    onChange={e =>
                        onChangeInputField('telephone', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('telephone')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.name}
                    label="Name"
                    grow={true}
                    placeHolder="Name"
                    onChange={e =>
                        onChangeInputField('name', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('name')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.address}
                    label="Address"
                    grow={true}
                    placeHolder="Address"
                    onChange={e =>
                        onChangeInputField('address', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('address')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.zipcode}
                    label="zipcode"
                    grow={true}
                    placeHolder="Zipcode"
                    onChange={e =>
                        onChangeInputField('zipcode', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('zipcode')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <InlineEditableTextField
                    value={inputValues.city}
                    label="City"
                    grow={true}
                    placeHolder="City"
                    onChange={e =>
                        onChangeInputField('city', e.currentTarget.value)
                    }
                    errorText={inputErrors.get('city')}
                />
            </InputField>
            <InputField spacingBottom="1em">
                <Button size="s" onClick={() => onSave()}>
                    Save
                </Button>
            </InputField>
        </div>
    );
};
