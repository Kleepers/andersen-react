import s from "./Cards.module.css";
import React from "react";
import {LocationInterface} from "./CardsInterfaces";

const Card = ({id, image, name, location, status}: { id: number, image: string, name: string, location: LocationInterface, status: string }) => {
    return <div key={id}>
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
    </div>
}

export default Card;