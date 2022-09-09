import React from "react";
import {Link} from "react-router-dom";

import s from "./Cards.module.css";
import {Location} from "./CardsInterfaces";


type Props = {
    id: number,
    image: string,
    name: string,
    location: Location,
    status: string,
    page: string
}

const Card = ({ id, image, name, location, status, page }: Props) => {
    return <Link to={`${page}${id}`} className={s.card}>
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