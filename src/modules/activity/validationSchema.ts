import { Yup } from 'react-ui/build/Validation';

export default Yup.object({
    _id: Yup.string().notRequired(),
    title: Yup.string().min(1, 'title is required'),
    notes: Yup.string(),
    creationDate: Yup.date().required('Date is required'),
    type: Yup.string().required('type is required'),
    dueDate: Yup.date().notRequired(),
});
