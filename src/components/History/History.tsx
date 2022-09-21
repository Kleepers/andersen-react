import React from 'react';
import {clearHistory, selectHistory} from "../../features/characterSlice";
import HistoryItem from "../HistoryItem/HistoryItem";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import s from './History.module.css';
import {Filters} from "../Cards/CardsInterfaces";

const History = () => {

    const dispatch = useAppDispatch();
    const history = useAppSelector(selectHistory);

    function handleClearHistory () {
        dispatch(clearHistory());
    }

    return (
        <div className={s.history}>
            <button type='button' className={s.history__button} onClick={handleClearHistory}>Clear History</button>
            {history.map((item: Filters, index: number) => {
                const {name, status, species, type, gender} = item;
                return <HistoryItem key={index} name={name} status={status} species={species} type={type} gender={gender}/>;
            })}
        </div>
    );
};

export default History;
