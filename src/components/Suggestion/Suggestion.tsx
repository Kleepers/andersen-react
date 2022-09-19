import React from 'react';
import s from './Suggestion.module.css';
import {Link} from "react-router-dom";

const Suggestion = ({id, name, gender, status, image}: any) => {
    return (
        <Link className={s.suggestion} to={`/character/${id}`}>
            <img className={s.suggestion__image} src={image}></img>
            <span className={s.suggestion__name}>{name}</span>
            <span className={s.suggestion__gender}>{gender}</span>
            <span className={s.suggestion__status}>{status}</span>
        </Link>
    );
};

export default Suggestion;
