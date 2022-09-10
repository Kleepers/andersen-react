import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"

import {Character} from "../Cards/CardsInterfaces";

import s from "./CardDetails.module.css"


const CardDetails = () => {
    let {id} = useParams<string>();
    let api = `https://rickandmortyapi.com/api/character/${id}`

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

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => updateFetchedData(data))
    }, [api]);

    return (
        <div className={s.container}>
            <div className="">
                <h1 className={s.name}>{name}</h1>
                <img src={image} alt=""/>
                {(() => {
                    if (status === "Alive") {
                        return <div className={s.alive}>{status}</div>
                    } else if (status === "Dead") {
                        return <div className={s.dead}>{status}</div>
                    } else {
                        return <div className={s.unknown}>{status}</div>
                    }
                })()
                }
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
                        <span className={s.text}>Type: {type === '' ? "Humanoid" : type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardDetails;