import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {setHistory} from "../../features/characterSlice";
import {useAppDispatch} from "../../app/hooks";
import useDebounce from "../../hooks/useDebounce";
import SearchBar from "./SearchBar";
import {Character} from "../Cards/CardsInterfaces";

interface Props {
    filterHandler: (formValue: FormState) => void;
}

export interface FormState {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

const SearchBarContainer = ({filterHandler}: Props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [formValue, setFormValue] = useState<FormState>({
        name: searchParams.get('name') || '',
        status: searchParams.get('status') || '',
        species: searchParams.get('species') || '',
        type: searchParams.get('type') || '',
        gender: searchParams.get('gender') || ''
    });
    const [suggestions, setSuggestions] = useState<Array<Character>>([]);
    const debouncedValue = useDebounce<FormState>(formValue, 1000)
    const { name, status, species, type, gender } = formValue;

    useEffect(() => {
        filterHandler(formValue);
    }, [])

    useEffect(() => {
        if(debouncedValue.name !== '' || debouncedValue.status !== '' || debouncedValue.species !== '' || debouncedValue.type !== '' || debouncedValue.gender !== '') {
            fetch(`https://rickandmortyapi.com/api/character/?name=${debouncedValue.name}&status=${debouncedValue.status}&species=${debouncedValue.species}&type=${debouncedValue.type}&gender=${debouncedValue.gender}`)
                .then(res => res.json())
                .then(data => data.results.slice(0, 5))
                .then(results => {
                    setSuggestions(results)
                })
        } else {
            setSuggestions([]);
        }
    }, [debouncedValue])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({'name': name, 'status': status, 'species': species, 'type': type, 'gender': gender});
        filterHandler(formValue);
        navigate('/search?name=' + name + '&status=' + status + '&species=' + species + '&type=' + type + '&gender=' + gender);
        dispatch(setHistory({name, status, species, type, gender}));
    }

    return (
        <SearchBar formValue={formValue} setFormValue={setFormValue} handleSearch={handleSearch} suggestions={suggestions}/>
    );
};

export default SearchBarContainer;
