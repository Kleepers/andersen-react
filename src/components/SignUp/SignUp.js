import React from 'react';
import {useState} from 'react';
import s from './SignUp.module.css';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            <button>Sign Up</button>
        </div>
    );
};

export default SignUp;
