import React from 'react';
import {selectAuth} from "../../features/authSlice";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";

const PrivateRoute = ({children}: {children: JSX.Element}): JSX.Element => {
    const { token } = useAppSelector(selectAuth);
    return token ? children : <Navigate to={'/signin'} />;
};

export default PrivateRoute;
