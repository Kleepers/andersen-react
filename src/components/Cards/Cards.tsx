import React, {useState} from "react";
import {useAppDispatch} from "../../app/hooks";
import Card from "./Card"
import {Character, Filters} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";
import {useGetCharacterQuery} from "../../services/characterApi";
import {setCharacters} from "../../features/characterSlice";
import s from "./Cards.module.css"

type Props = {
    filters: Filters
}

const Cards = ({filters}: Props): JSX.Element => {
    let dispatch = useAppDispatch();



    const [prevFilters, setPrevFilters] = useState<Filters>(filters);
    const [pageNumber, setPageNumber] = useState<number>(1);
    if (prevFilters !== filters) {
        setPageNumber(1);
        setPrevFilters(filters);
    }
    //const currentPageNumber = filters === prevFilters ? pageNumber : 1;

    const {data, error} = useGetCharacterQuery({page: pageNumber, ...filters});

    const pagesAmount = Number(data?.info.pages) || 0;
    let cardsField;
    dispatch(setCharacters(data?.results || []));

    if (data) {
        cardsField = data.results.map((x: Character): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} id={id} name={name} image={image} location={location} status={status}/>;
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
