import React from 'react';
import s from './Suggestion.module.css';
import {Link} from "react-router-dom";

type Props = {
    id: string;
    name: string;
    gender: string;
    status: string;
    image: string;
}

const Suggestion = ({id, name, gender, status, image}: Props) => {
    return (
        <Link className={s.suggestion} to={`/character/${id}`}>
            <img alt='character-image' className={s.suggestion__image} src={image}></img>
            <span className={s.suggestion__name}>{name}</span>
            <span className={s.suggestion__gender}>{gender}</span>
            <span className={s.suggestion__status}>{status}</span>
        </Link>
    );
};

export default Suggestion;
