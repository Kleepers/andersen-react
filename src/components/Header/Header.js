import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.css';
import {useAppSelector} from "../../app/hooks";

const Header = () => {

    const isAuth = useAppSelector(state => state.user.token)

    return (
        <header className={s.header}>
            <Link to={'/'} className={s.link}>Logo Placeholder</Link>
            <div className={s.linkWrapper}>
                {isAuth
                    ?
                    <>
                        <Link to={'/favorites'} className={s.link}>Favorites</Link>
                        <Link to={'/history'} className={s.link}>History</Link>
                    </>
                    :
                    <>
                        <Link to={'/signin'} className={s.link}>Sign In</Link>
                        <Link to={'/signup'} className={s.link}>Sign Up</Link>
                    </>
                }
            </div>

        </header>
    );
};

export default Header;
