import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectFavorites} from "../../features/characterSlice";
import {useGetCharacterByIdQuery} from "../../services/characterApi";
import {Character} from "../Cards/CardsInterfaces";
import Card from "../Cards/Card";
import s from "../Cards/Cards.module.css";

const Favorites = () => {
    const favorites = useAppSelector(selectFavorites);

    const shouldFetch = favorites.length > 0;

    const {data} = useGetCharacterByIdQuery(favorites, {
        skip: !shouldFetch
    });

    let cardsField;

    if (!data) {
        cardsField = 'No characters'
    } else if (data.length) {
        cardsField = data.map((x: Character): JSX.Element => {
            return <Card key={data.id} data={x}/>;
        });
    } else {
        cardsField = <Card data={data}/>;
    }

    return (
        <div className={s.container}>{cardsField}</div>
    )
};

export default Favorites;
