import React from 'react';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {useLoginUserMutation} from "../../services/authApi";
import {useAppDispatch} from "../../app/hooks";
import {setUser} from "../../features/authSlice";
import SignInSchema from "./SignInSchema";
import SignIn from "./SignIn";
import Loader from "../Loader/Loader";


type FormValue = {
    email: string;
    password: string;
}

const initialState = {
    email: '',
    password: '',
}

const SignInContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loginUser, {isLoading}] = useLoginUserMutation();

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: SignInSchema,
        onSubmit: (values: FormValue) => {
            const {email, password} = values;
            loginUser({email, password}).unwrap()
                .then(fulfilled => {
                    dispatch(setUser({
                        name: fulfilled.result.name,
                        token: fulfilled.token,
                        email: fulfilled.result.email
                    }));
                    navigate('/');
                })
                .catch(rejected => {
                    alert((rejected).data.message);
                });
        }
    })

    if (isLoading) {
        return <Loader/>
    }

    return (
        <SignIn formik={formik}/>
    );
};

export default SignInContainer;
