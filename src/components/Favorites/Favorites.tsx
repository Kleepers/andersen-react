import React, {useEffect} from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectFavorites} from "../../features/characterSlice";
import {useGetCharacterByIdQuery} from "../../services/characterApi";
import {Character} from "../Cards/CardsInterfaces";
import Card from "../Cards/Card";
import s from "../Cards/Cards.module.css";

const Favorites = () => {
    const favorites = useAppSelector(selectFavorites);

    const {data, error} = useGetCharacterByIdQuery(favorites);

    console.log(data);

    let cardsField;

    if (typeof data === 'object') {
        cardsField = <Card key={data.id} id={data.id} name={data.name} image={data.image} location={data.location} status={data.status}/>;
    } else if (data === undefined) {
        cardsField = 'No characters'
    } else {
        cardsField = data.map((x: Character): JSX.Element => {
            const {id, name, image, location, status} = x;
            return <Card key={id} id={id} name={name} image={image} location={location} status={status}/>;
        });
    }

    return (
        <div className={s.container}>{cardsField}</div>
    )
};

export default Favorites;
