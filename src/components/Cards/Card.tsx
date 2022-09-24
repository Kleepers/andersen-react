import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Location} from "./CardsInterfaces";
import {deleteFavorite, selectFavorites, setFavorites} from "../../features/characterSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

import s from "./Cards.module.css";



type Props = {
    data: {
        id: number,
        image: string,
        name: string,
        location: Location,
        status: string
    }
}


const Card = ({data}: Props) => {
    const dispatch = useAppDispatch();

    let isFavorite: boolean;
    let addOrDelete = "Add to Favorites";
    const characterId = Number(data.id);
    const favorites = useAppSelector(selectFavorites);

    if (favorites.length > 0) {
        isFavorite = favorites.includes(characterId);
        if(isFavorite){
            addOrDelete = "Delete from Favorites";
        }
    }

    function handleFavorites() {
        if (isFavorite) {
            dispatch(deleteFavorite(characterId))
        } else {
            dispatch(setFavorites(characterId))
        }
    }

    const {id, image, name, location, status} = data;
    return <div className={s.card}>
        <img src={image} alt="character photo"/>
        <div className={s.content}>
            <Link to={`/character/${id}`} className={s.name}>{name}</Link>
            <button onClick={handleFavorites} className={s.button}>{addOrDelete}</button>
            <div className={status.toLowerCase()}>{status}</div>
            <div>
                <div className={s.location}>Last location</div>
                <div>{location.name}</div>
            </div>
        </div>
    </div>
}

Card.propTypes = {
    data: {
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        location: {
            name: PropTypes.string,
            url: PropTypes.string
        },
        status: PropTypes.string,

    }
}

export default Card;
