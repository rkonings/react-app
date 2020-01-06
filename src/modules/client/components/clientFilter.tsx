import queryString from 'query-string';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { FilterConfig } from 'react-ui/build/Filters/Filter';
import FilterPopup from 'react-ui/build/Filters/FilterPopup';
import { useFiltersQuery } from '../../hooks';

export const useQueryFilter = (): { [key: string]: string[] } => {
    const { filter } = useParams();

    if (filter) {
        const parsedFilter = queryString.parse(filter, {
            arrayFormat: 'comma',
        });

        return Object.keys(parsedFilter).reduce<{ [name: string]: string[] }>(
            (obj, key) => {
                const value = parsedFilter[key];
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
    const { data } = useFiltersQuery({
        variables: { types: ['city', 'type'] },
    });
    const filter = useQueryFilter();

    const setFilter = (filter: { [key: string]: string[] }) => {
        const query = queryString.stringify(filter, { arrayFormat: 'comma' });
        history.push('/clients/' + query + '/');
    };
    if (data) {
        data.filter.forEach((item: FilterConfig) => {
            if (filter[item.id]) {
                item.value = filter[item.id];
            }
        });

        return <FilterPopup data={data.filter} onChange={setFilter} />;
    }

    return <div />;
};
