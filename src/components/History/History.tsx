import React from 'react';
import {selectHistory} from "../../features/characterSlice";
import HistoryItem from "../HistoryItem/HistoryItem";
import {useAppSelector} from "../../app/hooks";
import s from './History.module.css';

const History = () => {

    const history = useAppSelector(selectHistory);

    return (
        <div className={s.history}>
            {history.map((item: any, index: number) => {
                const {name, status, species, type, gender} = item;
                return <HistoryItem key={index} name={name} status={status} species={species} type={type} gender={gender}/>;
            })}
        </div>
    );
};

export default History;
