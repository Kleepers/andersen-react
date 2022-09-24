import React from 'react';
import s from "./SignIn.module.css";
import {FormikProps} from "formik";

interface FormValues {
    email: string;
    password: string;
}

type Props = {
    formik: FormikProps<FormValues>
}

const SignIn = ({formik}: Props) => {
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