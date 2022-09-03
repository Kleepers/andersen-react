import React from "react";

import {Card, Location} from "./CardsInterfaces";

import s from "./Cards.module.css"


const Cards = ({ results }: { results: Array<Card> }) => {
    let display;

    if (results) {
        display = results.map((x: Card): JSX.Element => {
            let id: number, name: string, image: string, location: Location, status: string;
            ({id, name, image, location, status} = x);
            return (
                <div key={id}>
                    <div className={s.card}>
                        <img src={image} alt="character photo"/>
                        <div className={s.content}>
                            <div className={s.name}>{name}</div>
                            <div className={status.toLowerCase()}>{status}</div>
                            <div>
                                <div className={s.location}>Last location</div>
                                <div>{location.name}</div>
                            </div>
                        </div>
                    </div>
                </div>);
        });
    } else {
        display = "No characters found";
    }

    return <div className={s.container}>{display}</div>

}

export default Cards;