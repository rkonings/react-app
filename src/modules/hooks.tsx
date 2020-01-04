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
  type?: Maybe<Scalars['String']>,
  activities?: Maybe<Array<Maybe<Activity>>>,
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
  options: Array<Maybe<FilterOption>>,
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
  user?: Maybe<User>,
  client?: Maybe<Client>,
  clients?: Maybe<Array<Maybe<Client>>>,
  activity?: Maybe<Activity>,
  activities?: Maybe<Array<Maybe<Activity>>>,
  filter?: Maybe<Array<Maybe<Filter>>>,
};


export type QueryClientArgs = {
  _id?: Maybe<Scalars['String']>
};


export type QueryClientsArgs = {
  type?: Maybe<Array<Maybe<Scalars['String']>>>,
  city?: Maybe<Array<Maybe<Scalars['String']>>>
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
  settings?: Maybe<Settings>,
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
  & { activity: Maybe<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )> }
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