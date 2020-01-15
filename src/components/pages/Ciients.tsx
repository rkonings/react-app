import React from 'react';
import Navigation from '../Navigation';
import Basic from 'react-ui/build/Layout/Basic';
import { ResponsiveDataTable } from 'react-ui/build/DataTable/';
import { Sort } from 'react-ui/build/DataTable/DataTable';
import { AddClient } from '../../modules/client/components/addClient';
import { UpdateClient } from '../../modules/client/components/updateClient';
import { DataField, DataRow } from 'react-ui/build/interfaces/Data';
import { Edit, Options, Trash } from 'react-ui/build/Icon';
import RowAction from 'react-ui/build/DataTable/DataTableRowAction';
import ButtonGroup from 'react-ui/build/ButtonGroup/ButtonGroup';
import DeletePopover from 'react-ui/build/Popover/DeletePopover';

import {
    useClientsQuery,
    useDeleteClientMutation,
    ClientsDocument,
    SortDirectionInput,
    SortInput,
} from '../../modules/hooks';

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
    const [sort, setSort] = React.useState<SortInput>({
        field: 'name',
        direction: SortDirectionInput.Asc,
    });
    const [deleteClient] = useDeleteClientMutation();

    const filter = useQueryFilter();

    const deleteClientHandler = (_id: string) => {
        deleteClient({
            variables: { _id },
            refetchQueries: [
                { query: ClientsDocument, variables: { ...filter, sort } },
            ],
            // update: (cache, { data }) => {
            //     const result = cache.readQuery<{ clients: Array<Client> }>({
            //         query: ClientsDocument,
            //         variables: { ...filter, sort },
            //     });

            //     if (result && data && data.deleteClient._id) {
            //         const clients = result.clients.filter(
            //             client => client._id !== data.deleteClient._id
            //         );

            //         cache.writeQuery({
            //             query: ClientsDocument,
            //             variables: { ...filter, sort },
            //             data: { clients },
            //         });
            //     }
            // },
        });
    };

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
                    <DeletePopover
                        link={
                            <RowAction>
                                <Trash />
                            </RowAction>
                        }
                        onDelete={() => deleteClientHandler(row.data._id)}
                    >
                        Your are about to premantly remove this client. This
                        cannot be undone.
                    </DeletePopover>

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

    const { loading, data } = useClientsQuery({
        variables: { ...filter, sort },
        fetchPolicy: 'network-only',
    });

    const clients: DataRow[] = [];

    if (data) {
        data.clients.forEach(client => {
            clients.push({
                data: client,
            });
        });
    }

    const sortHandler = (sort: Sort) => {
        const transformedSort = {
            field: sort.field.name,
            direction:
                sort.direction === 'ASC'
                    ? SortDirectionInput.Asc
                    : SortDirectionInput.Desc,
        };
        setSort(transformedSort);
    };

    const Toolbar = () => (
        <React.Fragment>
            <ClientFilter />
            <AddClient />
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Basic
                pageTitle="Clients management"
                left={<Navigation />}
                toolbar={<Toolbar />}
            >
                <ResponsiveDataTable
                    columns={columns}
                    data={clients}
                    fields={fields}
                    loading={!data && loading}
                    sortHandler={sortHandler}
                />
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
