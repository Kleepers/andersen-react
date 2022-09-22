import React from "react";
import {Link} from "react-router-dom";

import {Location} from "./CardsInterfaces";

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

const Card = ({ data }: Props) => {
    const {id, image, name, location, status} = data;
    return <Link to={`/character/${id}`} className={s.card}>
        <img src={image} alt="character photo"/>
        <div className={s.content}>
            <div className={s.name}>{name}</div>
            <div className={status.toLowerCase()}>{status}</div>
            <div>
                <div className={s.location}>Last location</div>
                <div>{location.name}</div>
            </div>
        </div>
    </Link>
}

export default Card;
