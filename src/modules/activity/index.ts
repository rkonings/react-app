import { MutationHookOptions, useMutation } from '@apollo/react-hooks';
import UPDATE_ACTIVITY_QUERY from './updateActivity.graphql';
import ADD_ACTIVITY_QUERY from './addActivity.graphql';
export { default as ValidationSchema } from './validationSchema';

export const useUpdateActivity = (
    options?: MutationHookOptions<any, Record<string, any>>
) => {
    return useMutation(UPDATE_ACTIVITY_QUERY, options);
};

export const useAddActivity = (
    options?: MutationHookOptions<any, Record<string, any>>
) => {
    return useMutation(ADD_ACTIVITY_QUERY, {
        refetchQueries: ['GET_CLIENT'],
        ...options,
    });
};
