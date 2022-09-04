import React from 'react';
import {useState} from 'react';
import {signUpUser} from "../../reducers/authReducer";
import {useAppDispatch} from "../../app/hooks";
import s from './SignUp.module.css';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const signUp = () => {
        dispatch(signUpUser({email, password}))
    }

    return (
        <div className={s.signup}>
            <h1 className={s.title}>please signup</h1>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
