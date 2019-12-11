import {
    useQuery,
    useMutation,
    MutationHookOptions,
    QueryHookOptions,
} from '@apollo/react-hooks';
import getUser from './getUser.graphql';
import updateUser from './updateUser.graphql';
export { default as ValidationSchema } from './validationSchema';

export interface UserSettings {
    language: string;
    dateFormat: string;
    pushNotifications: boolean;
    unscribeEmailLink: boolean;
    signature: string;
}

export interface User {
    firstName: string;
    lastName: string;
    settings: UserSettings;
    password: string;
    email: string;
}

export const useUser = (options?: QueryHookOptions) => {
    return useQuery(getUser, options);
};

export const useUpdateUser = (
    options?: MutationHookOptions<any, Record<string, any>>
) => {
    return useMutation(updateUser, options);
};
