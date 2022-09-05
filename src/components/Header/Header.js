import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.css';

const Header = () => {

    const isAuth = false;

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
