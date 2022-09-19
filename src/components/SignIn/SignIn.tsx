import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {useLoginUserMutation} from "../../services/authApi";
import {useAppDispatch} from "../../app/hooks";
import {setUser} from "../../features/authSlice";
import SignInSchema from "./SignInSchema";
import s from './SignIn.module.css';


type FormValue = {
    email: string;
    password: string;
}

const initialState = {
    email: '',
    password: '',
}

const SignIn = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loginUser, {data, isSuccess, isError, error}] = useLoginUserMutation();

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: SignInSchema,
        onSubmit: (values: FormValue) => {
            const {email, password} = values;
            loginUser({email, password}).unwrap()
                .then(fulfilled => {
                    alert('Login success')
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

    return (
        <form onSubmit={formik.handleSubmit} className={s.signin}>
            <h1 className={s.title}>please signin</h1>
            <input
                type='email'
                name={'email'}
                value={formik.values.email}
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}
            <input
                type='password'
                name={'password'}
                value={formik.values.password}
                placeholder='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && <div className={s.error}>{formik.errors.password}</div>}
            <button disabled={!formik.isValid && !formik.dirty} type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
