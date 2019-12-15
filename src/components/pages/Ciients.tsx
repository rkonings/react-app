import React from 'react';
import Navigation from '../Navigation';
import queryString from 'query-string';
import { useParams, useHistory } from 'react-router';
import Basic from 'react-ui/build/Layout/Basic';
import { ResponsiveDataTable } from 'react-ui/build/DataTable/';
import { FilterBar } from 'react-ui/build/Filters';
import { Filter } from 'react-ui/build/Filters/FilterBar';
import FilterPopup from 'react-ui/build/Filters/FilterPopup';
import { useGetClients, Client } from '../../modules/client';
import { AddClient } from '../../modules/client/components/addClient';
import { UpdateClient } from '../../modules/client/components/updateClient';
import { DataField, DataRow } from 'react-ui/build/interfaces/Data';
import { Edit, Options, Trash } from 'react-ui/build/Icon';
import RowAction from 'react-ui/build/DataTable/DataTableRowAction';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';

const ClientTypes = ['Klant', 'Prospect', 'Lead', 'Suspect'];

const Cities = [
    'Utrecht',
    'Nieuwegein',
    'Eindhoven',
    'Ijsselstein',
    'Amsterdam',
    'Hellendoorn',
    'Hilversum',
    'Breda',
    'Bilthoven',
    'Amersfoort',
];

const FilterConfig: Filter[] = [
    {
        id: 'type',
        label: 'Type',
        options: ClientTypes.map(item => {
            return { value: item, label: item };
        }),
    },
    {
        id: 'city',
        label: 'City',
        options: Cities.map(item => {
            return { value: item, label: item };
        }),
        search: true,
    },
];

const fields: DataField[] = [
    {
        type: 'string',
        name: 'name',
        hasNegative: false,
        isDateTime: false,
        display: 'Company',
    },
    {
        type: 'string',
        name: 'type',
        hasNegative: false,
        isDateTime: false,
        display: 'Type',
    },
    {
        type: 'string',
        name: 'telephone',
        hasNegative: false,
        isDateTime: false,
        display: 'Telephone',
    },
    {
        type: 'string',
        name: 'address',
        hasNegative: false,
        isDateTime: true,
        display: 'Address',
    },
    {
        type: 'string',
        name: 'zipcode',
        hasNegative: false,
        isDateTime: true,
        display: 'Zipcode',
    },
    {
        type: 'string',
        name: 'city',
        hasNegative: false,
        isDateTime: true,
        display: 'City',
    },
];

const useFilter = () => {
    const { filter } = useParams();

    if (filter) {
        return queryString.parse(filter, { arrayFormat: 'comma' }) as {
            [key: string]: string[];
        };
    }

    return null;
};

export default () => {
    const history = useHistory();

    const [editClientId, setEditClientId] = React.useState<string | null>(null);

    const columns = [
        {
            type: 'SELECT',
            width: 50,
        },
        {
            type: 'DATA',
            fieldName: 'name',
            sortable: true,
            defaultSort: true,
            defaultSortDirection: 'ASC',
        },
        {
            type: 'DATA',
            fieldName: 'type',
            width: 150,
            align: 'left',
            sortable: true,
        },
        {
            type: 'DATA',
            fieldName: 'address',
            width: 300,
            align: 'left',
            sortable: true,
        },
        {
            type: 'DATA',
            fieldName: 'zipcode',
            width: 100,
            align: 'left',
            sortable: true,
        },
        {
            type: 'DATA',
            fieldName: 'city',
            width: 200,
            align: 'left',
            sortable: true,
        },
        {
            type: 'DATA',
            fieldName: 'telephone',
            width: 100,
            align: 'right',
            sortable: true,
        },
        {
            type: 'TOOLBAR',
            width: 110,
            toolbar: (row: DataRow) => (
                <ButtonGroup size={'s'}>
                    <RowAction onClick={() => setEditClientId(row.data._id)}>
                        <Edit />
                    </RowAction>
                    <RowAction onClick={() => console.log('Delete', row)}>
                        <Trash />
                    </RowAction>
                    <RowAction>
                        <Options />
                    </RowAction>
                </ButtonGroup>
            ),
        },
    ];

    const setFilter = (filter: { [key: string]: string[] }) => {
        const query = queryString.stringify(filter, { arrayFormat: 'comma' });
        history.push('/clients/' + query + '/');
    };

    const filter = useFilter();

    FilterConfig.forEach(item => {
        if (filter && Array.isArray(filter[item.id])) {
            item.value = filter[item.id];
        }
    });

    const { loading, error, data, refetch } = useGetClients(filter);

    let clients: DataRow[] = [];

    if (data) {
        clients = data.clients.map((client: Client) => {
            return { data: client };
        });
    }

    return (
        <React.Fragment>
            <Basic pageTitle="Clients management" left={<Navigation />}>
                <React.Fragment>
                    {loading && clients.length === 0 && <h1>Loading</h1>}
                    {clients && (
                        <React.Fragment>
                            <AddClient onAdded={() => refetch()} />
                            <FilterPopup
                                data={FilterConfig}
                                onChange={setFilter}
                            />
                            <ResponsiveDataTable
                                columns={columns}
                                data={clients}
                                fields={fields}
                            />
                        </React.Fragment>
                    )}
                </React.Fragment>
            </Basic>
            {editClientId && (
                <UpdateClient
                    close={() => setEditClientId(null)}
                    _id={editClientId}
                />
            )}
        </React.Fragment>
    );
};
