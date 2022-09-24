import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {useFormik} from "formik";
import SignUpSchema from "./SignUpSchema";
import {useRegisterUserMutation} from "../../services/authApi";
import {setUser} from "../../features/authSlice";
import SignUp from "./SignUp";
import Loader from "../Loader/Loader";


type FormValue = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpContainer = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [registerUser, {isLoading}] = useRegisterUserMutation();

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: SignUpSchema,
        onSubmit: (values: FormValue) => {
            const {firstName, lastName, email, password} = values;
            registerUser({firstName, lastName, email, password}).unwrap()
                .then(fulfilled => {
                    dispatch(setUser({
                        name: fulfilled.result.name,
                        token: fulfilled.token,
                        email: fulfilled.result.email
                    }));
                    navigate('/');
                }).catch(rejected => {
                alert((rejected).data.message);
            });
        }

    })

    if(isLoading){
        return <Loader/>
    }

    return (
        <SignUp formik={formik}/>
    );

};

export default SignUpContainer;
