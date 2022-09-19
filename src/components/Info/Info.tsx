import React from 'react';
import s from './Info.module.css'

const Info = () => {
    return (
        <div className={s.container}>
            <h1>Welcome to the Rick and Morty Characters web application</h1>
            <div className={s.text}>This React project will help you discover Rick and Morty characters all across the
                series universe.
            </div>
            <div className={s.text}>Performed by <a href="https://github.com/Kleepers">V. Khakimov</a> and <a href="https://github.com/cybervasyan">E. Saidashev</a></div>
        </div>
    );
};

export default Info;
