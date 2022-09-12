import React, {useEffect, useState} from "react";
import Card from "./Card"
import {FetchedData, Filters} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";

import s from "./Cards.module.css"

type Props = {
    filters: Filters
}

const initialState = {
    info: {
        count: null,
        next: null,
        pages: 0,
        prev: null
    }, results: []
}

const Cards = ({filters}: Props): JSX.Element => {
    let cardsField;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [fetchedData, updateFetchedData] = useState<FetchedData>(initialState);
    const {info, results}  = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${filters.name}&status=${filters.status}&species=${filters.species}&type=${filters.type}&gender=${filters.gender}`;

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [pageNumber]);

    useEffect(() => {
        setPageNumber(1);
        api = `https://rickandmortyapi.com/api/character/?page=1&name=${filters.name}&status=${filters.status}&species=${filters.species}&type=${filters.type}&gender=${filters.gender}`;
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [filters])

    if (results) {
        cardsField = results.map((x): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} id={id} name={name} image={image} location={location} status={status}/>;
        });
    } else {
        cardsField = "No characters found";
    }

    return (
        <>
            <div className={s.container}>{cardsField}</div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
        </>
    )
}
export default Cards;
