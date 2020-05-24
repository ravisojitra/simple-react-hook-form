import * as yup from 'yup';

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .min(5, 'Name must be minimum of length 5')
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    title: yup
        .string()
        .oneOf(['Mr', 'Mrs', 'Miss'],"Please Select Title")
        .required(),
    website: yup
        .string()
        .url("Please enter valid url")
        .required('Website is required.')
})

export { registerSchema }