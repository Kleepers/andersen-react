import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Firstname is required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Lastname is required"),
    email: Yup.string().email('Invalid email address').required('Field required'),
    password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Field required'),
    confirmPassword: Yup.string()
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
        })
        .min(6, 'Must be 6 characters or more')
        .required('Field required')
});

export default SignUpSchema;