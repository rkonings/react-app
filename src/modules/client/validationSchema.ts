import { Yup } from 'react-ui/build/Validation';

export default Yup.object({
    _id: Yup.string(),
    name: Yup.string().min(1, 'company name is required'),
    telephone: Yup.string().required('telephone is required'),
    address: Yup.string().required('password is required'),
    city: Yup.string().required('city is required'),
    zipcode: Yup.string().required('zipcode is required'),
    type: Yup.string().required('type is required'),
});
