import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectAuth} from "../../features/authSlice";
import s from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {name} = useAppSelector(selectAuth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signin')
    }

    return (
        <section className={s.dashboard}>
            <h1 className={s.dashboard__title}>Welcome to Dashboard</h1>
            <h4 className={s.dashboard__name}>{name}</h4>
            <button
                className={s.dashboard__button}
                type='button'
                onClick={handleLogout}
            >Logout</button>
        </section>
    );
};

export default Dashboard;
