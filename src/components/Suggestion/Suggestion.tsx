import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import s from './Suggestion.module.css';


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
            <img alt='character-image' className={s.suggestion__image} src={image}/>
            <span className={s.suggestion__name}>{name}</span>
            <span className={s.suggestion__gender}>{gender}</span>
            <span className={s.suggestion__status}>{status}</span>
        </Link>
    );
};

Suggestion.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
}

export default Suggestion;
