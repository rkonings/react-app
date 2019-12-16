import {
    useQuery,
    QueryHookOptions,
    MutationHookOptions,
    useMutation,
} from '@apollo/react-hooks';
import GET_CLIENTS_QUERY from './getClients.graphql';
export { default as ValidationSchema } from './validationSchema';
import ADD_CLIENT_QUERY from './addClient.graphql';
import UPDATE_CLIENT_QUERY from './updateClient.graphql';
import GET_CLIENT_QUERY from './getClient.graphql';
import GET_FILTERS from './getFilters.graphql';

export const useUpdateClient = (
    options?: MutationHookOptions<any, Record<string, any>>
) => {
    return useMutation(UPDATE_CLIENT_QUERY, options);
};

export const useGetClients = (
    filter: { [key: string]: string[] } | null,
    options?: QueryHookOptions
) => {
    return useQuery(GET_CLIENTS_QUERY, {
        ...(options || {}),
        variables: filter,
    });
};

export const useGetClient = (_id: string, options?: QueryHookOptions) => {
    return useQuery(GET_CLIENT_QUERY, {
        ...(options || {}),
        variables: { _id },
    });
};

export const useGetFilters = (types: string[], options?: QueryHookOptions) => {
    return useQuery(GET_FILTERS, {
        ...(options || {}),
        variables: { types },
    });
};

export const useAddClient = (
    options?: MutationHookOptions<any, Record<string, any>>
) => {
    return useMutation(ADD_CLIENT_QUERY, options);
};

export interface Client {
    _id?: string;
    name: string;
    telephone: string;
    address: string;
    zipcode: string;
    city: string;
    type: string;
}
