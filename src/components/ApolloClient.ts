import ApolloClient from 'apollo-boost';
import {
    InMemoryCache,
    IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';

import introspectionResult from '../modules/introspection-result';

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
    fragmentMatcher,
});

export default new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache,
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : '',
            },
        });
    },
});
