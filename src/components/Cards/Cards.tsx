import React, {useEffect, useState} from "react";

import Card from "./Card"
import {FetchedData} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";

import s from "./Cards.module.css"


const initialState = {
    info: {
        count: null,
        next: null,
        pages: 0,
        prev: null
    }, results: []
}

const Cards = (): JSX.Element => {
    let cardsField;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [fetchedData, updateFetchedData] = useState<FetchedData>(initialState);
    const {info, results}  = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [api]);


    if (results) {
        cardsField = results.map((x): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} id={id} name={name} image={image} location={location} status={status}/>;
        });
    } else {
        cardsField = "No characters found";
    }

    return <React.Fragment>
        <div className={s.container}>{cardsField}</div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </React.Fragment>

}

export default Cards;