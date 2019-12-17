import React from 'react';
import { FilterConfig } from 'react-ui/build/Filters/Filter';
import FilterPopup from 'react-ui/build/Filters/FilterPopup';
import queryString from 'query-string';
import { useParams, useHistory } from 'react-router';
import { useGetFilters } from '../';

export const useQueryFilter = (): { [key: string]: string[] } => {
    const { filter } = useParams();

    if (filter) {
        const parsedFilter = queryString.parse(filter, {
            arrayFormat: 'comma',
        });

        return Object.keys(parsedFilter).reduce<{ [name: string]: string[] }>(
            (obj, key) => {
                let value = parsedFilter[key];
                if (value instanceof Array) {
                    obj[key] = value;
                } else if (typeof value === 'string') {
                    obj[key] = [value];
                }
                return obj;
            },
            {}
        );
    }

    return {};
};

export const ClientFilter = () => {
    const history = useHistory();
    const { data } = useGetFilters(['city', 'type']);
    const filter = useQueryFilter();

    const setFilter = (filter: { [key: string]: string[] }) => {
        const query = queryString.stringify(filter, { arrayFormat: 'comma' });
        history.push('/clients/' + query + '/');
    };
    if (data && data.filter) {
        data.filter.forEach((item: FilterConfig) => {
            if (filter[item.id]) {
                item.value = filter[item.id];
            }
        });

        return <FilterPopup data={data.filter} onChange={setFilter} />;
    }

    return <div />;
};
