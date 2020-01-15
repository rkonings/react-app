/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type Activity = {
   __typename?: 'Activity',
  _id: Scalars['String'],
  type: Scalars['String'],
  title: Scalars['String'],
  user: User,
  client: Scalars['String'],
  notes: Scalars['String'],
  creationDate: Scalars['Date'],
  dueDate?: Maybe<Scalars['Date']>,
};

export type Author = {
   __typename?: 'Author',
  name: Scalars['String'],
  id: Scalars['String'],
  posts?: Maybe<Array<Maybe<Post>>>,
};

export type Client = {
   __typename?: 'Client',
  _id: Scalars['String'],
  name: Scalars['String'],
  address: Scalars['String'],
  zipcode: Scalars['String'],
  telephone: Scalars['String'],
  city: Scalars['String'],
  user: Scalars['String'],
  type: Scalars['String'],
  activities: Array<Activity>,
};

export type ClientInput = {
  _id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  zipcode?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type CreateActivityInput = {
  _id?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  type: Scalars['String'],
  client?: Maybe<Scalars['String']>,
  creationDate?: Maybe<Scalars['Date']>,
  dueDate?: Maybe<Scalars['Date']>,
};


export type Filter = {
   __typename?: 'Filter',
  options: Array<FilterOption>,
  id: Scalars['String'],
  label: Scalars['String'],
};

export type FilterOption = {
   __typename?: 'FilterOption',
  label: Scalars['String'],
  value: Scalars['String'],
};

export type InputSettings = {
  language?: Maybe<Scalars['String']>,
  dateFormat?: Maybe<Scalars['String']>,
  pushNotifications?: Maybe<Scalars['Boolean']>,
  unscribeEmailLink?: Maybe<Scalars['Boolean']>,
  signature?: Maybe<Scalars['String']>,
};

export type InputUser = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  settings?: Maybe<InputSettings>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addClient?: Maybe<Client>,
  updateClient?: Maybe<Client>,
  deleteClient: Client,
  addActivity?: Maybe<Activity>,
  updateActivity?: Maybe<Activity>,
  signup?: Maybe<User>,
  login?: Maybe<Token>,
  updateUser?: Maybe<User>,
  seedClients?: Maybe<Array<Maybe<Client>>>,
};


export type MutationAddClientArgs = {
  client?: Maybe<ClientInput>
};


export type MutationUpdateClientArgs = {
  client?: Maybe<ClientInput>
};


export type MutationDeleteClientArgs = {
  _id: Scalars['String']
};


export type MutationAddActivityArgs = {
  activity?: Maybe<CreateActivityInput>
};


export type MutationUpdateActivityArgs = {
  activity?: Maybe<UpdateActivityInput>
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateUserArgs = {
  user?: Maybe<InputUser>
};


export type MutationSeedClientsArgs = {
  amount: Scalars['Int']
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['String'],
  title: Scalars['String'],
  author?: Maybe<Author>,
};

export type Query = {
   __typename?: 'Query',
  posts?: Maybe<Array<Maybe<Post>>>,
  authors?: Maybe<Array<Maybe<Author>>>,
  users?: Maybe<Array<Maybe<User>>>,
  user: User,
  client: Client,
  clients: Array<Client>,
  activity: Activity,
  activities?: Maybe<Array<Maybe<Activity>>>,
  filter: Array<Filter>,
};


export type QueryClientArgs = {
  _id?: Maybe<Scalars['String']>
};


export type QueryClientsArgs = {
  sort?: Maybe<SortInput>,
  type?: Maybe<Array<Maybe<Scalars['String']>>>,
  city?: Maybe<Array<Maybe<Scalars['String']>>>,
  sort?: Maybe<SortInput>
};


export type QueryActivityArgs = {
  _id?: Maybe<Scalars['String']>
};


export type QueryActivitiesArgs = {
  type?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryFilterArgs = {
  types: Array<Scalars['String']>
};

export type Settings = {
   __typename?: 'Settings',
  language: Scalars['String'],
  dateFormat: Scalars['String'],
  pushNotifications: Scalars['Boolean'],
  unscribeEmailLink: Scalars['Boolean'],
  signature: Scalars['String'],
};

export enum SortDirectionInput {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortInput = {
  field: Scalars['String'],
  direction: SortDirectionInput,
};

export type Token = {
   __typename?: 'Token',
  token: Scalars['String'],
};

export type UpdateActivityInput = {
  _id: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  client?: Maybe<Scalars['String']>,
  creationDate?: Maybe<Scalars['Date']>,
  dueDate?: Maybe<Scalars['Date']>,
};

export type User = {
   __typename?: 'User',
  _id: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  settings: Settings,
};

export type ActivityFragment = (
  { __typename?: 'Activity' }
  & Pick<Activity, '_id' | 'title' | 'notes' | 'type' | 'creationDate' | 'dueDate'>
);

export type CreateActivityMutationVariables = {
  activity?: Maybe<CreateActivityInput>
};


export type CreateActivityMutation = (
  { __typename?: 'Mutation' }
  & { addActivity: Maybe<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )> }
);

export type UpdateActivityMutationVariables = {
  activity?: Maybe<UpdateActivityInput>
};


export type UpdateActivityMutation = (
  { __typename?: 'Mutation' }
  & { updateActivity: Maybe<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )> }
);

export type ActivityQueryVariables = {};


export type ActivityQuery = (
  { __typename?: 'Query' }
  & { activity: (
    { __typename?: 'Activity' }
    & ActivityFragment
  ) }
);

export type ClientFragment = (
  { __typename?: 'Client' }
  & Pick<Client, '_id' | 'name' | 'telephone' | 'address' | 'city' | 'zipcode' | 'type'>
);

export type CreateClientMutationVariables = {
  client?: Maybe<ClientInput>
};


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { addClient: Maybe<(
    { __typename?: 'Client' }
    & ClientFragment
  )> }
);

export type DeleteClientMutationVariables = {
  _id: Scalars['String']
};


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & { deleteClient: (
    { __typename?: 'Client' }
    & ClientFragment
  ) }
);

export type UpdateClientMutationVariables = {
  client?: Maybe<ClientInput>
};


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: Maybe<(
    { __typename?: 'Client' }
    & ClientFragment
  )> }
);

export type ClientQueryVariables = {
  _id?: Maybe<Scalars['String']>
};


export type ClientQuery = (
  { __typename?: 'Query' }
  & { client: (
    { __typename?: 'Client' }
    & { activities: Array<(
      { __typename?: 'Activity' }
      & ActivityFragment
    )> }
    & ClientFragment
  ) }
);

export type ClientsQueryVariables = {
  type?: Maybe<Array<Maybe<Scalars['String']>>>,
  city?: Maybe<Array<Maybe<Scalars['String']>>>,
  sort?: Maybe<SortInput>
};


export type ClientsQuery = (
  { __typename?: 'Query' }
  & { clients: Array<(
    { __typename?: 'Client' }
    & ClientFragment
  )> }
);

export type FiltersQueryVariables = {
  types: Array<Scalars['String']>
};


export type FiltersQuery = (
  { __typename?: 'Query' }
  & { filter: Array<(
    { __typename?: 'Filter' }
    & Pick<Filter, 'id' | 'label'>
    & { options: Array<(
      { __typename?: 'FilterOption' }
      & Pick<FilterOption, 'label' | 'value'>
    )> }
  )> }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'email' | 'firstName' | 'lastName'>
  & { settings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'language' | 'dateFormat' | 'pushNotifications' | 'unscribeEmailLink' | 'signature'>
  ) }
);

export type UpdateUserMutationVariables = {
  user?: Maybe<InputUser>
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export const ActivityFragmentDoc = gql`
    fragment Activity on Activity {
  _id
  title
  notes
  type
  creationDate
  dueDate
}
    `;
export const ClientFragmentDoc = gql`
    fragment Client on Client {
  _id
  name
  telephone
  address
  city
  zipcode
  type
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  _id
  email
  firstName
  lastName
  settings {
    language
    dateFormat
    pushNotifications
    unscribeEmailLink
    signature
  }
}
    `;
export const CreateActivityDocument = gql`
    mutation createActivity($activity: CreateActivityInput) {
  addActivity(activity: $activity) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;
export type CreateActivityMutationFn = ApolloReactCommon.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      activity: // value for 'activity'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, baseOptions);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = ApolloReactCommon.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const UpdateActivityDocument = gql`
    mutation updateActivity($activity: UpdateActivityInput) {
  updateActivity(activity: $activity) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;
export type UpdateActivityMutationFn = ApolloReactCommon.MutationFunction<UpdateActivityMutation, UpdateActivityMutationVariables>;

/**
 * __useUpdateActivityMutation__
 *
 * To run a mutation, you first call `useUpdateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityMutation, { data, loading, error }] = useUpdateActivityMutation({
 *   variables: {
 *      activity: // value for 'activity'
 *   },
 * });
 */
export function useUpdateActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateActivityMutation, UpdateActivityMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateActivityMutation, UpdateActivityMutationVariables>(UpdateActivityDocument, baseOptions);
      }
export type UpdateActivityMutationHookResult = ReturnType<typeof useUpdateActivityMutation>;
export type UpdateActivityMutationResult = ApolloReactCommon.MutationResult<UpdateActivityMutation>;
export type UpdateActivityMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateActivityMutation, UpdateActivityMutationVariables>;
export const ActivityDocument = gql`
    query Activity {
  activity {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
      }
export function useActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = ApolloReactCommon.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($client: ClientInput) {
  addClient(client: $client) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;
export type CreateClientMutationFn = ApolloReactCommon.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      client: // value for 'client'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, baseOptions);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = ApolloReactCommon.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const DeleteClientDocument = gql`
    mutation DeleteClient($_id: String!) {
  deleteClient(_id: $_id) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;
export type DeleteClientMutationFn = ApolloReactCommon.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, baseOptions);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = ApolloReactCommon.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const UpdateClientDocument = gql`
    mutation updateClient($client: ClientInput) {
  updateClient(client: $client) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;
export type UpdateClientMutationFn = ApolloReactCommon.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      client: // value for 'client'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, baseOptions);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = ApolloReactCommon.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const ClientDocument = gql`
    query client($_id: String) {
  client(_id: $_id) {
    ...Client
    activities {
      ...Activity
    }
  }
}
    ${ClientFragmentDoc}
${ActivityFragmentDoc}`;

/**
 * __useClientQuery__
 *
 * To run a query within a React component, call `useClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useClientQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClientQuery, ClientQueryVariables>) {
        return ApolloReactHooks.useQuery<ClientQuery, ClientQueryVariables>(ClientDocument, baseOptions);
      }
export function useClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClientQuery, ClientQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClientQuery, ClientQueryVariables>(ClientDocument, baseOptions);
        }
export type ClientQueryHookResult = ReturnType<typeof useClientQuery>;
export type ClientLazyQueryHookResult = ReturnType<typeof useClientLazyQuery>;
export type ClientQueryResult = ApolloReactCommon.QueryResult<ClientQuery, ClientQueryVariables>;
export const ClientsDocument = gql`
    query clients($type: [String], $city: [String], $sort: SortInput) {
  clients(type: $type, city: $city, sort: $sort) {
    ...Client
  }
}
    ${ClientFragmentDoc}`;

/**
 * __useClientsQuery__
 *
 * To run a query within a React component, call `useClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientsQuery({
 *   variables: {
 *      type: // value for 'type'
 *      city: // value for 'city'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
        return ApolloReactHooks.useQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, baseOptions);
      }
export function useClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, baseOptions);
        }
export type ClientsQueryHookResult = ReturnType<typeof useClientsQuery>;
export type ClientsLazyQueryHookResult = ReturnType<typeof useClientsLazyQuery>;
export type ClientsQueryResult = ApolloReactCommon.QueryResult<ClientsQuery, ClientsQueryVariables>;
export const FiltersDocument = gql`
    query filters($types: [String!]!) {
  filter(types: $types) {
    options {
      label
      value
    }
    id
    label
  }
}
    `;

/**
 * __useFiltersQuery__
 *
 * To run a query within a React component, call `useFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFiltersQuery({
 *   variables: {
 *      types: // value for 'types'
 *   },
 * });
 */
export function useFiltersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FiltersQuery, FiltersQueryVariables>) {
        return ApolloReactHooks.useQuery<FiltersQuery, FiltersQueryVariables>(FiltersDocument, baseOptions);
      }
export function useFiltersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FiltersQuery, FiltersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FiltersQuery, FiltersQueryVariables>(FiltersDocument, baseOptions);
        }
export type FiltersQueryHookResult = ReturnType<typeof useFiltersQuery>;
export type FiltersLazyQueryHookResult = ReturnType<typeof useFiltersLazyQuery>;
export type FiltersQueryResult = ApolloReactCommon.QueryResult<FiltersQuery, FiltersQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($user: InputUser) {
  updateUser(user: $user) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = gql`
    query User {
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;