import React from 'react';
import {Character} from "../Cards/CardsInterfaces";

import s from "./CardDetails.module.css";



type Props = {
    fetchedData: Character,
    handleFavorites: () => void,
    handleShareTelegram: () => void,
    isTelegramShareEnabled: boolean,
}


const CardDetails = ({
                              fetchedData,
                              handleFavorites,
                              isTelegramShareEnabled,
                              handleShareTelegram
                          }: Props): JSX.Element => {
    let {name, image, origin, location, gender, species, status, type} = fetchedData;

    return (
        <div className={s.container}>
            <div className="">
                <h1 className={s.name}>{name}</h1>
                <img src={image} alt=""/>
                <div className={`${s.status} ${s[status.toLowerCase()]}`}>{status}</div>
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
};

export default CardDetails;