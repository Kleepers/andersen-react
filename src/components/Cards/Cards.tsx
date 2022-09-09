import React, {useEffect, useState} from "react";

import {FetchedData, Filters} from "./CardsInterfaces";
import Card from "./Card"

import s from "./Cards.module.css"
import SearchBar from "../SearchBar/SearchBar";


const Cards = () => {
    let cardsField;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [filters, setFilters] = useState<Filters>({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
    })
    const [fetchedData, updateFetchedData] = useState<FetchedData>({
        info: {
            count: null,
            next: null,
            pages: null,
            prev: null
        }, results: []
    });
    const {results} = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${filters.name}&status=${filters.status}&species=${filters.species}&type=${filters.type}&gender=${filters.gender}`;

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

    function handleSetFilters (filters: Filters) {
        setFilters({
            name: filters.name,
            status: filters.status,
            species: filters.species,
            type: filters.type,
            gender: filters.gender
        })
    }

    return (
        <>
            <SearchBar filterHandler={handleSetFilters}/>
            <div className={s.container}>{cardsField}</div>
        </>

    )

}

export default Cards;
