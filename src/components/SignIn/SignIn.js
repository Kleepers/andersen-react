import React from 'react';
import {useState} from 'react';
import {signInUser} from "../../reducers/authReducer";
import {useAppDispatch} from "../../app/hooks";
import s from './SignIn.module.css';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const signUp = () => {
        dispatch(signInUser({email,password}))
    }

    return (
        <div className={s.signin}>
            <h1 className={s.title}>please signin</h1>
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
            <button onClick={signUp}>Sign In</button>
        </div>
    );
};

export default SignIn;
