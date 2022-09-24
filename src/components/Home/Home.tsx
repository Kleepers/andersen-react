import React, {lazy, useState, Suspense} from 'react';
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import {Route, Routes, useSearchParams} from "react-router-dom";
import {Filters} from "../Cards/CardsInterfaces";

import s from './Home.module.css';

const Info = lazy(() => import ("../Info/Info"));
const CardsContainer = lazy(() => import ("../Cards/CardsContainer"));


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
        <div className={s.home}>
            <SearchBarContainer filterHandler={handleSetFilters}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/search' element={<CardsContainer filters={filters}/>}/>
                    <Route path='/' element={<Info/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default Home;
