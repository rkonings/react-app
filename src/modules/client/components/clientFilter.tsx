import React from 'react';
import { FilterConfig } from 'react-ui/build/Filters/Filter';
import FilterPopup from 'react-ui/build/Filters/FilterPopup';
import queryString from 'query-string';
import { useParams, useHistory } from 'react-router';
import { useGetFilters } from '../';

export const useQueryFilter = () => {
    const { filter } = useParams();

    if (filter) {
        return queryString.parse(filter, { arrayFormat: 'comma' }) as {
            [key: string]: string[];
        };
    }

    return null;
};

export const ClientFilter = () => {
    const history = useHistory();
    const { loading, data } = useGetFilters(['city', 'type']);
    const filter = useQueryFilter();

    const setFilter = (filter: { [key: string]: string[] }) => {
        const query = queryString.stringify(filter, { arrayFormat: 'comma' });
        history.push('/clients/' + query + '/');
    };
    if (data && data.filter) {
        data.filter.forEach((item: FilterConfig) => {
            if (filter && Array.isArray(filter[item.id])) {
                item.value = filter[item.id];
            }
        });

        return <FilterPopup data={data.filter} onChange={setFilter} />;
    }

    return <div />;
};
