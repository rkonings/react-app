import dotProp from 'dot-prop';
import React from 'react';

import Activity from 'react-ui/build/Activity/Activity';
import { ChangedItem, ChangeOptions } from 'react-ui/build/Form';

import { ValidationSchema } from '../../activity';
import {
    Activity as ActivityInterface,
    useUpdateActivityMutation,
} from '../../hooks';

interface Activity {
    activity: ActivityInterface;
}

export default ({ activity }: Activity) => {
    const [updateActivity] = useUpdateActivityMutation();

    const onChangeHandler = (
        items: ChangedItem[],
        _?: ChangeOptions | undefined,
        callBack?: (() => void) | undefined
    ) => {
        const update = items.reduce((obj, item) => {
            dotProp.set(obj, item.field, item.value);
            return obj;
        }, {});

        updateActivity({
            variables: { activity: { _id: activity._id, ...update } },
            update: () => {
                if (callBack) {
                    callBack();
                }
            },
        });
    };
    return (
        <Activity
            validationSchema={ValidationSchema}
            activity={activity}
            onChange={onChangeHandler}
            onRemove={() => null}
        />
    );
};
