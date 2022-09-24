import React from 'react';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
