import React, {useEffect, useState} from "react";
import {CardInterface, LocationInterface} from "./CardsInterfaces";
import Card from "./Card"
import s from "./Cards.module.css"


const Cards = () => {
    let display;
    let [pageNumber, setPageNumber] = useState<number>(42);
    let [fetchedData, updateFetchedData] = useState<any>([]);
    let {info, results} = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            updateFetchedData(data);
        })();
    }, [api]);


    if (results) {
        display = results.map((x: CardInterface): JSX.Element => {
            let id: number, name: string, image: string, location: LocationInterface, status: string;
            ({id, name, image, location, status} = x);
            return <Card id={id} name={name} image={image} location={location} status={status}/>;
        });
    } else {
        display = "No characters found";
    }

    return <div className={s.container}>{display}</div>

}

export default Cards;