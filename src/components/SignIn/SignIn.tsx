import React, {useEffect} from 'react';
import {useState} from 'react';
import s from './SignIn.module.css';
import {useLoginUserMutation} from "../../services/authApi";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {setUser} from "../../features/authSlice";

const initialState = {
    email: '',
    password: '',
}

const SignIn = () => {
    const dispatch = useAppDispatch();

    const [formValue, setFormValue] = useState(initialState);

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
