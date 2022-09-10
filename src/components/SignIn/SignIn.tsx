import React, {useState} from 'react';
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

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            await loginUser({email, password}).unwrap()
                .then(fulfilled => {
                    alert('Login success')
                    dispatch(setUser({ name: fulfilled.result.name, token: fulfilled.token, email: fulfilled.result.email }));
                    navigate('/')
            })
                .catch(rejected => {
                    alert((rejected).data.message);
                    console.error(rejected)
                })
        } else {
            alert('Please fill all fields')
        }
    }

    return (
        <form className={s.signin}>
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
            <button onClick={handleLogin}>Sign In</button>
        </form>
    );
};

export default SignIn;
