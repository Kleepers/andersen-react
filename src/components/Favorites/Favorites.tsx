import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectFavorites} from "../../features/characterSlice";
import {useGetCharacterByIdQuery} from "../../services/characterApi";
import {Character} from "../Cards/CardsInterfaces";
import Card from "../Cards/Card";
import s from "../Cards/Cards.module.css";
import Loader from "../Loader/Loader";


const Favorites = () => {
    const favorites = useAppSelector(selectFavorites);

    const shouldFetch = favorites.length > 0;
    let dataOur: any;
    let cardsField;

    const {data, isLoading} = useGetCharacterByIdQuery(favorites, {
        skip: !shouldFetch
    });

    dataOur = shouldFetch ? data : null;

    if (!dataOur) {
        cardsField = <div>No characters</div>
    } else if (dataOur.length) {
        cardsField = dataOur.map((x: Character): JSX.Element => {
            return <Card key={x.id} data={x}/>;
        });
    } else {
        cardsField = <Card data={dataOur}/>;
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className={s.container}>{cardsField}</div>
    )
};

export default Favorites;
