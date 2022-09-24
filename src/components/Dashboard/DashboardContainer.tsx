import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectAuth} from "../../features/authSlice";
import Dashboard from "./Dashboard";

const DashboardContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {name} = useAppSelector(selectAuth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signin')
    }

    return (
        <Dashboard name={name} handleLogout={handleLogout}/>
    );
};

export default DashboardContainer;
