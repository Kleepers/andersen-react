import React from 'react';
import {useState} from 'react';
import {signUpUser} from "../../reducers/authReducer";
import {useAppDispatch} from "../../app/hooks";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const signUp = () => {
        dispatch(signUpUser({email, password}))
    }

    return (
        <div>
            <h1>please signup</h1>
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
