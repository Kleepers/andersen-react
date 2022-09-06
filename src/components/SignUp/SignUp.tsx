import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import { useRegisterUserMutation } from "../../services/authApi";
import {setUser} from "../../features/authSlice";
import s from './SignUp.module.css';

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

const SignUp = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState<FormValue>(initialState);

    const { firstName, lastName, email, password, confirmPassword } = formValue;

    const [registerUser, { data, isSuccess, isError, error }] = useRegisterUserMutation();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (firstName && lastName && email && password) {
            await registerUser({ firstName, lastName, email, password });
        }
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser({ name: data.result.name, token: data.token }));
            alert('Registration successful');
            navigate('/')
        }
    })

    useEffect(() => {
        if (isError) {
            alert((error as any).data.message);
        }
    }, [isError])

    return (
        <div className={s.signup}>
            <h1 className={s.title}>please signup</h1>
            <input
                type='text'
                value={firstName}
                placeholder='First Name'
                onChange={(e) => setFormValue({...formValue, firstName: e.target.value})}/>
            <input
                type='text'
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => setFormValue({...formValue, lastName: e.target.value})}/>
            <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setFormValue({...formValue, email: e.target.value})}
                />
            <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setFormValue({...formValue, password: e.target.value})}
            />
            <input
                type='password'
                value={confirmPassword}
                placeholder='Confirm password'
                onChange={(e) => setFormValue({...formValue, confirmPassword: e.target.value})}
            />
            <button onClick={() => handleRegister()}>Sign Up</button>
        </div>
    );
};

export default SignUp;
