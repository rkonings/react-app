import { useQuery } from '@apollo/react-hooks';
import GET_CLIENTS_QUERY from './getClients.graphql';

export const useGetClients = (filter?: { [key: string]: string[] } | null) => {
    return useQuery(GET_CLIENTS_QUERY, { variables: filter });
};
