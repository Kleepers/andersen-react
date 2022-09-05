import React from "react";

import s from "./Cards.module.css";
import {Location} from "./CardsInterfaces";


type Props = {
    image: string,
    name: string,
    location: Location,
    status: string
}

const Card = ({ image, name, location, status }: Props) => {
    return <div className={s.card}>
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
}

export default Card;