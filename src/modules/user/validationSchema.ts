import { Yup } from 'react-ui/build/Validation';

export default Yup.object({
    firstName: Yup.string().required('is required'),
    lastName: Yup.string().required('field is required'),
    password: Yup.string().required('password is required'),
    email: Yup.string().required('email is required'),
    settings: Yup.object({
        language: Yup.string().required('is required'),
        dateFormat: Yup.string().required('is required'),
        pushNotifications: Yup.boolean().required('is required'),
    }),
});
