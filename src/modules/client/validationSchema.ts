import { Yup } from 'react-ui/build/Validation';

export default Yup.object({
    _id: Yup.string().notRequired(),
    name: Yup.string().min(1, 'company name is required'),
    telephone: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
    ),
    address: Yup.string()
        .required('Address is required')
        .matches(
            /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i,
            'Address is not valid'
        ),
    city: Yup.string().required('city is required'),
    zipcode: Yup.string()
        .required('zipcode is required')
        .matches(/^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i, 'Zipcode is not valid'),
    type: Yup.string().required('type is required'),
});
