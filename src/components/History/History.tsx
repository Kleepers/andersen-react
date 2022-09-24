import React from 'react';
import s from "./History.module.css";
import {Filters} from "../Cards/CardsInterfaces";
import HistoryItem from "../HistoryItem/HistoryItem";


type Props = {
    history: Array<Filters>,
    handleClearHistory: () => void,
}

const History = ({history, handleClearHistory}: Props) => {
    return (
        <div className={s.history}>
            <button type='button' className={s.history__button} onClick={handleClearHistory}>Clear History</button>
            {history.map((item: Filters, index: number) => {
                return <HistoryItem key={index} data={item}/>;
            })}
        </div>
    );
};

export default History;