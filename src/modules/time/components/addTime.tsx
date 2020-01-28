import React from 'react';
import Task from 'react-ui/build/UI/Task';
import { useCreateTimeMutation, Time } from '../../hooks';

interface AddTime {
    onAdded?: () => void;
}

interface TimeData extends Omit<Time, '_id' | 'client' | '__typename'> {}

export const AddTime = ({ onAdded }: AddTime) => {
    const [createTime] = useCreateTimeMutation();
    const onChangeHandler = (time: TimeData, callback?: () => void) => {
        createTime({
            variables: {
                time: { ...time, client: '5e1f1f5f94d8406304973eb9' },
            },
            // refetchQueries: [{ query: TimeDocument }],
            update: () => {
                if (onAdded) {
                    onAdded();
                }
                callback && callback();
            },
        });
    };

    return <Task onChange={onChangeHandler} />;
};
