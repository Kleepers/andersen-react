import React from 'react';
import s from "./SignUp.module.css";
import {FormikProps} from "formik";


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type Props = {
    formik: FormikProps<FormValues>
}

const SignUp = ({formik}: Props) => {
    return (
        <form onSubmit={formik.handleSubmit} className={s.signup}>
            <h1 className={s.title}>please signup</h1>
            <input
                type='text'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='First Name'
            />
            {formik.touched.firstName && formik.errors.firstName &&
            <div className={s.error}>{formik.errors.firstName}</div>}
            <input
                type='text'
                name={'lastName'}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Last Name'
            />
            {formik.touched.lastName && formik.errors.lastName &&
            <div className={s.error}>{formik.errors.lastName}</div>}
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
            {formik.touched.password && formik.errors.password &&
            <div className={s.error}>{formik.errors.password}</div>}
            <input
                type='password'
                name={'confirmPassword'}
                value={formik.values.confirmPassword}
                placeholder='Confirm password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword &&
            <div className={s.error}>{formik.errors.confirmPassword}</div>}
            <button disabled={!formik.isValid && !formik.dirty} type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;