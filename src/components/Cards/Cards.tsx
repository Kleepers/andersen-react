import React, {useEffect, useState} from "react";

import {FetchedData} from "./CardsInterfaces";
import Card from "./Card"

import s from "./Cards.module.css"


const Cards = () => {
    let cardsField;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [fetchedData, updateFetchedData] = useState<FetchedData>({
        info: {
            count: null,
            next: null,
            pages: null,
            prev: null
        }, results: []
    });
    const {results}  = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [api]);


    if (results) {
        cardsField = results.map((x): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} name={name} image={image} location={location} status={status}/>;
        });
    } else {
        cardsField = "No characters found";
    }

    return <div className={s.container}>{cardsField}</div>

}

export default Cards;