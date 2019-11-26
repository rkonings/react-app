import React from 'react';
import Navigation from '../Navigation';
import queryString from 'query-string';
import { useParams, useHistory } from 'react-router';
import Basic from 'react-ui/build/Layout/Basic';
import { DataField, DataRow } from 'react-ui/build/interfaces/Data';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ResponsiveDataTable } from 'react-ui/build/DataTable/';
import { FilterBar } from 'react-ui/build/Filters';
import { Filter } from 'react-ui/build/Filters/FilterBar';

const ClientTypes = [
	'Klant',
	'Prospect',
	'Lead',
	'Suspect'
];

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
	'Amersfoort'
];

const FilterConfig: Filter[] = [
	{
		id: 'type',
		label: 'Type',
		options: ClientTypes.map((item) => {
			return { value: item, label: item };
		})
	},
	{
		id: 'city',
		label: 'City',
		options: Cities.map((item) => {
			return { value: item, label: item };
		}),
		search: true
	}
];

const fields: DataField[] = [
	{
		type: 'string',
		name: 'name',
		hasNegative: false,
		isDateTime: false,
		display: 'Company'
	},
	{
		type: 'string',
		name: 'type',
		hasNegative: false,
		isDateTime: false,
		display: 'Type'
	},
	{
		type: 'string',
		name: 'telephone',
		hasNegative: false,
		isDateTime: false,
		display: 'Telephone'
	},
	{
		type: 'string',
		name: 'address',
		hasNegative: false,
		isDateTime: true,
		display: 'Address'
	},
	{
		type: 'string',
		name: 'zipcode',
		hasNegative: false,
		isDateTime: true,
		display: 'Zipcode'
	},
	{
		type: 'string',
		name: 'city',
		hasNegative: false,
		isDateTime: true,
		display: 'City'
	}
];

const columns = [
	{
		type: 'SELECT',
		width: 50
	},
	{
		type: 'DATA',
		fieldName: 'name',
		sortable: true,
		defaultSort: true,
		defaultSortDirection: 'ASC'
	},
	{
		type: 'DATA',
		fieldName: 'type',
		width: 150,
		align: 'left',
		sortable: true
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
		width: 300,
		align: 'left',
		sortable: true,
	},
	{
		type: 'DATA',
		fieldName: 'city',
		width: 300,
		align: 'left',
		sortable: true,
	},
	{
		type: 'DATA',
		fieldName: 'telephone',
		width: 200,
		align: 'right',
		sortable: true
	}

];

const useFilter = () => {
	const { filter } = useParams();

	if (filter) {
		return queryString.parse(filter, { arrayFormat: 'comma' }) as { [key: string]: string[]};
	}

	return null;

};

export default () => {

	const history = useHistory();

	const setFilter = (filter: { [key: string]: string[]}) => {
		const query = queryString.stringify(filter, {arrayFormat: 'comma'});
		history.push('/clients/' + query + '/');
	};

	const GET_CLIENTS = gql`
        query GET_CLIENTS($type: [String], $city: [String]) {
            clients (type: $type, city: $city) {
				data {
                	name
					telephone
					address
					city
					zipcode
					type
				}
            }
        }
    `;
	const filter = useFilter();

	FilterConfig.forEach((item) => {
		if (filter && Array.isArray(filter[item.id])){
			item.value = filter[item.id];
		}
	});

	const { loading, error, data } = useQuery(GET_CLIENTS, { variables: filter });

	let clients: DataRow[] = [];

	if (data) {
		clients = data.clients;
	}

	return (
		<React.Fragment>
			<Basic
				pageTitle="Clients management"
				left={<Navigation />}
			>
				<FilterBar data={FilterConfig} onChange={setFilter} />
				<ResponsiveDataTable
					columns={columns}
					data={clients}
					fields={fields}
				/>
			</Basic>
		</React.Fragment>
	);
};
