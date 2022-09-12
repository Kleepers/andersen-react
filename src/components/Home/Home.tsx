import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {Route, Routes, useSearchParams} from "react-router-dom";
import Info from "../Info/Info";
import Cards from "../Cards/Cards";
import {Filters} from "../Cards/CardsInterfaces";

const Home = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState<Filters>({
        name: searchParams.get('name') || '',
        status: searchParams.get('status') || '',
        species: searchParams.get('species') || '',
        type: searchParams.get('type') || '',
        gender: searchParams.get('gender') || ''
    })

    function handleSetFilters (filters: Filters) {
        setFilters({
            name: filters.name,
            status: filters.status,
            species: filters.species,
            type: filters.type,
            gender: filters.gender
        })
    }

    return (
        <div>
            <SearchBar filterHandler={handleSetFilters}/>
            <Routes>
                <Route path='/search' element={<Cards filters={filters}/>}/>
                <Route path='/' element={<Info />}/>
            </Routes>
        </div>
    );
};

export default Home;
