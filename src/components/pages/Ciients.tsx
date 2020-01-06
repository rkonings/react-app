import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';
import { ResponsiveDataTable } from 'react-ui/build/DataTable/';
import { AddClient } from '../../modules/client/components/addClient';
import { UpdateClient } from '../../modules/client/components/updateClient';
import { DataField, DataRow } from 'react-ui/build/interfaces/Data';
import { Edit, Options, Trash } from 'react-ui/build/Icon';
import RowAction from 'react-ui/build/DataTable/DataTableRowAction';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';

import { useClientsQuery } from '../../modules/hooks';

import {
    ClientFilter,
    useQueryFilter,
} from '../../modules/client/components/clientFilter';
import { useHistory } from 'react-router';

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

export default () => {
    const [editClientId, setEditClientId] = React.useState<string | null>(null);
    const history = useHistory();

    const columns = [
        {
            type: 'SELECT',
            width: 50,
        },
        {
            type: 'TOOLBAR',
            width: 110,
            toolbar: (row: DataRow) => (
                <ButtonGroup size={'s'}>
                    <RowAction
                        onClick={() => history.push(`/client/${row.data._id}/`)}
                    >
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
        {
            type: 'DATA',
            fieldName: 'name',
            sortable: true,
            defaultSort: true,
            width: 500,
            defaultSortDirection: 'ASC',
        },
        {
            type: 'DATA',
            fieldName: 'type',
            width: 400,
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
            width: 300,
            align: 'right',
            sortable: true,
        },
    ];
    const filter = useQueryFilter();
    const { loading, data } = useClientsQuery({ variables: filter });

    const clients: DataRow[] = [];

    if (data) {
        data.clients.forEach(client => {
            clients.push({
                data: client,
            });
        });
    }

    return (
        <React.Fragment>
            <Basic pageTitle="Clients management" left={<Navigation />}>
                <React.Fragment>
                    <React.Fragment>
                        <AddClient />
                        <ClientFilter />
                        <ResponsiveDataTable
                            columns={columns}
                            data={clients}
                            fields={fields}
                            loading={loading}
                        />
                    </React.Fragment>
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
