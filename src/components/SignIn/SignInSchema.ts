import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Field required'),
    password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Field required'),
});

export default SignInSchema;