import React, {useState, useEffect} from 'react';

import Cards from "./components/Cards/Cards";
import {Card, Info} from "./components/Cards/CardsInterfaces";

function App() {
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState<any>([]);
    let {info, results}: { info: Array<Info>, results: Array<Card> } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            updateFetchedData(data);
        })()
    }, [api]);

    return (
        <div className="App">
            <Cards results={results}/>
        </div>
    );
}

export default App;
