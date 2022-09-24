import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteFavorite, selectFavorites, setFavorites} from "../../features/characterSlice";
import {Character} from "../Cards/CardsInterfaces";
import s from "./CardDetails.module.css"
import {FeatureContext} from "../../app/FeatureContext";

const CardDetails = () => {
    let {id} = useParams();
    const characterId = Number(id);
    let api = `https://rickandmortyapi.com/api/character/${id}`
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const {isTelegramShareEnabled} = useContext(FeatureContext);

    let [fetchedData, updateFetchedData] = useState<Character>({
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        location: {
            name: '',
            url: ''
        },
        image: '',
        episode: [],
        url: '',
        created: '',
        origin: {
            name: '',
            url: ''
        }
    });

    let {name, image, origin, location, gender, species, status, type} = fetchedData;
    let isFavorite: boolean;
    let addOrDelete = "Add to Favorites";

    if (favorites.length > 0) {
        isFavorite = favorites.includes(characterId);
        if(isFavorite){
            addOrDelete = "Delete from Favorites";
        }
    }

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [api]);

    function handleFavorites () {
        if (isFavorite) {
            dispatch(deleteFavorite(characterId))
        } else {
            dispatch(setFavorites(characterId))
        }
    }

    function handleShareTelegram () {
        window.open(`https://t.me/share/url?url=http://localhost:3000/character/${id}`, '_blank')
    }

    return (
        <div className={s.container}>
            <div className="">
                <h1 className={s.name}>{name}</h1>
                <img src={image} alt=""/>
                <div className={`${s.status} ${s[status.toLowerCase()]}`}>{status}</div>
                <button onClick={handleFavorites} className={s.button}>{addOrDelete}</button>
                <div className={s.content}>
                    <div className="">
                        <span className={s.text}>Gender: {gender}</span>
                    </div>
                    <div className="">
                        <span className={s.text}>Species: {species}</span>
                    </div>
                    <div className="">
                        <span className={s.text}>Location: {location.name}</span>
                    </div>
                    <div className="">
                        <span className={s.text}>Origin: {origin.name}</span>
                    </div>
                    <div className="">
                        <span className={s.text}>Type: {type || "Humanoid"}</span>
                    </div>
                </div>
                 <button onClick={handleFavorites} className={s.button}>Like</button>
                 {isTelegramShareEnabled && <button onClick={handleShareTelegram} className={s.button}>Share</button>}
            </div>
        </div>
    );
}
export default CardDetails;
