import React from 'react';
import { useUser } from '../user';

export const DataLoader = ({ children }: { children: JSX.Element }) => {
    const { data } = useUser();
    if (!data) {
        return <h1>Loading</h1>;
    }
    return children;
};
