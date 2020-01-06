import React from 'react';
import { useUserQuery } from '../hooks';

export const DataLoader = ({ children }: { children: JSX.Element }) => {
    const { data } = useUserQuery();
    if (!data) {
        return <h1>Loading</h1>;
    }
    return children;
};
