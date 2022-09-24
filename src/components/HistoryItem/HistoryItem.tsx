import React from 'react';
import {Link} from "react-router-dom";
import s from './HistoryItem.module.css';


type Props = {
    data: {
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
    }
}

const HistoryItem = ({data}: Props) => {
    const {name, status, species, type, gender} = data;
    return (
        <Link to={`/search/?page=1&name=${name}&status=${status}&type=${type}&species=${species}&gender=${gender}`}
              className={s.historyItem}>
            <div className={s.historyItem__parameterWrapper}>
                <span className={s.historyItem__title}>Name:</span>
                <span className={s.historyItem__parameter}>{name || 'none'}</span>
            </div>
            <div className={s.historyItem__parameterWrapper}>
                <span className={s.historyItem__title}>Status: </span>
                <span className={s.historyItem__parameter}>{status || 'none'}</span>
            </div>
            <div className={s.historyItem__parameterWrapper}>
                <span className={s.historyItem__title}>Type: </span>
                <span className={s.historyItem__parameter}>{type || 'none'}</span>
            </div>
            <div className={s.historyItem__parameterWrapper}>
                <span className={s.historyItem__title}>Species: </span>
                <span className={s.historyItem__parameter}>{species || 'none'}</span>
            </div>
            <div className={s.historyItem__parameterWrapper}>
                <span className={s.historyItem__title}>Gender: </span>
                <span className={s.historyItem__parameter}>{gender || 'none'}</span>
            </div>
        </Link>
    );
};

export default HistoryItem;
