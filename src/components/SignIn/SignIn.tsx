import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useLoginUserMutation} from "../../services/authApi";
import {useAppDispatch} from "../../app/hooks";
import {setUser} from "../../features/authSlice";
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

    const [formValue, setFormValue] = useState<FormValue>(initialState);

    const {email, password} = formValue;

    const [loginUser, {data, isSuccess, isError, error}] = useLoginUserMutation();

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email && password) {
            await loginUser({email, password})
        } else {
            alert('Please fill all fields')
        }
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Login success')
            dispatch(setUser({ name: data.result.name, token: data.token }))
            navigate('/')
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            alert((error as any).data.message);
        }
    }, [isError])

    return (
        <div className={s.signin}>
            <h1 className={s.title}>please signin</h1>
            <input
                type='email'
                value={email}
                onChange={(e) => setFormValue({...formValue, email: e.target.value})}
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setFormValue({...formValue, password: e.target.value})}
            />
            <button onClick={() => handleLogin()}>Sign In</button>
        </div>
    );
};

export default SignIn;