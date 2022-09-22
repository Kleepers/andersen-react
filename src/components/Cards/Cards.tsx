import React, {useState} from "react";
import Card from "./Card"
import {Character, Filters} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";
import {useGetCharacterQuery} from "../../services/characterApi";
import s from "./Cards.module.css"

type Props = {
    filters: Filters
}

const Cards = ({filters}: Props): JSX.Element => {

    const [prevFilters, setPrevFilters] = useState<Filters>(filters);
    const [pageNumber, setPageNumber] = useState<number>(1);
    if (prevFilters !== filters) {
        setPageNumber(1);
        setPrevFilters(filters);
    }

    const {data} = useGetCharacterQuery({page: pageNumber, ...filters});

    const pagesAmount = Number(data?.info.pages) || 0;
    let cardsField;

    if (data) {
        cardsField = data.results.map((x: Character): JSX.Element => {
            return <Card key={data.id} data={x}/>;
        });
    } else {
        cardsField = 'No characters'
    }
    return (
        <>
            <div className={s.container}>{cardsField}</div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pagesAmount={pagesAmount}/>
        </>
    )
}

export default Cards;
