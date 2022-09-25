import React, {useState} from "react";
import Card from "./Card"
import {Character, Filters} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";
import {useGetCharacterQuery} from "../../services/characterApi";
import Loader from "../Loader/Loader";
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

    const {data, isFetching} = useGetCharacterQuery({page: pageNumber, ...filters});

    const pagesAmount = Number(data?.info.pages) || 0;
    let cardsField;

    if (data) {
        cardsField = data.results.map((x: Character): JSX.Element => {
            return <Card key={x.id} data={x}/>;
        });
    } else {
        cardsField = <div>No characters</div>
    }

    if(isFetching) {
        return <Loader/>
    }

    return (
        <>
            <div className={s.container}>{cardsField}</div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pagesAmount={pagesAmount}/>
        </>
    )
}

export default Cards;
