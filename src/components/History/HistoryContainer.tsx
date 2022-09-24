import React from 'react';
import {clearHistory, selectHistory} from "../../features/characterSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import History from "./History";


const HistoryContainer = () => {

    const dispatch = useAppDispatch();
    const history = useAppSelector(selectHistory);

    function handleClearHistory () {
        dispatch(clearHistory());
    }

    return (
        <History history={history} handleClearHistory={handleClearHistory}/>
    );
};

export default HistoryContainer;
