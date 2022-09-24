import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteFavorite, selectFavorites, setFavorites} from "../../features/characterSlice";
import {Character} from "../Cards/CardsInterfaces";
import {FeatureContext} from "../../app/FeatureContext";
import CardDetails from "./CardDetails";

const CardDetailsContainer = () => {
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

    let isFavorite: boolean;

    if (favorites.length > 0) {
        isFavorite = favorites.includes(characterId);
    }

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [api]);

    function handleFavorites (): void {
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
        <CardDetails fetchedData={fetchedData} handleFavorites={handleFavorites} handleShareTelegram={handleShareTelegram} isTelegramShareEnabled={isTelegramShareEnabled}/>
    );
}


export default CardDetailsContainer;
