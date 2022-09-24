import React from "react";
import s from "./CardDetails.module.css"
import {Character} from "../Cards/CardsInterfaces";


type Props = {
    fetchedData: Character,
    handleFavorites: () => void,
    handleShareTelegram: () => void,
    isTelegramShareEnabled: boolean,
    addOrDelete: string,
}

const CardDetails = ({fetchedData, handleFavorites, handleShareTelegram, isTelegramShareEnabled, addOrDelete}: Props) => {
    const {name, image, status, type, origin, location, gender, species} = fetchedData;

    return (
        <div className={s.container}>
            <div className="">
                <h1 className={s.name}>{name}</h1>
                <img src={image} alt=""/>

                <div className={`${s.status} ${s[status.toLowerCase()]}`}>{status}</div>
                <button onClick={handleFavorites} className={s.button}>{addOrDelete}</button>
                <div className={s.content}>
                    {isTelegramShareEnabled && <button onClick={handleShareTelegram} className={`${s.button} ${s.button_telegram}`}>Share via Telegram</button>}
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

            </div>
        </div>
    );
}
export default CardDetails;
