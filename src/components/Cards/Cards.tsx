import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Card from "./Card"
import {Character, Filters} from "./CardsInterfaces";
import Pagination from "../Pagination/Pagination";
import {useGetPageMutation} from "../../services/characterApi";
import {selectCharacters, setCharacters} from "../../features/characterSlice";
import s from "./Cards.module.css"


type Props = {
    filters: Filters
}


const Cards = ({filters}: Props): JSX.Element => {

    let dispatch = useAppDispatch();

    const {characters} = useAppSelector(selectCharacters)

    let cardsField;
    const [pages, setPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [getPage] = useGetPageMutation();

    const handleGetCards = async (page = pageNumber) => {
        await getPage({
            page: page,
            name: filters.name,
            status: filters.status,
            species: filters.species,
            type: filters.type,
            gender: filters.gender
        }).unwrap()
            .then(fulfilled => {
                setPages(fulfilled.info.pages)
                dispatch(setCharacters(fulfilled.results));
            })
            .catch(rejected => {
                cardsField = rejected.data.message
            })
    }

    useEffect(() => {
        handleGetCards();
    }, [pageNumber])

    useEffect(() => {
        handleGetCards(1);
    }, [filters])

    if (characters) {
        cardsField = characters.map((x: Character): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} id={id} name={name} image={image} location={location} status={status}/>;
        });
    } else {
        cardsField = "No characters found";
    }

    return (
        <>
            <div className={s.container}>{cardsField}</div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pages={pages}/>
        </>
    )
}

export default Cards;
