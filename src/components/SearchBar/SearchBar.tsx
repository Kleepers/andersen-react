import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import s from './SearchBar.module.css';


interface Props {
    filterHandler: (formValue: FormState) => void;
}

interface FormState {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

const SearchBar = ({filterHandler}: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [formValue, setFormValue] = useState<FormState>({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
    });

    const { name, status, species, type, gender } = formValue;

    useEffect(() => {
        setFormValue({
            name: searchParams.get('name') || '',
            status: searchParams.get('status') || '',
            species: searchParams.get('species') || '',
            type: searchParams.get('type') || '',
            gender: searchParams.get('gender') || ''
        });
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({'name': name, 'status': status, 'species': species, 'type': type, 'gender': gender});
        filterHandler(formValue);
    }

    return (
        <form className={s.searchBar}>
            <input value={name}
                   onChange={(e) => setFormValue({...formValue, name: e.target.value})}
                   name='name'
                   type='text'
                   placeholder='Name'/>
            <input value={status}
                   onChange={(e) => setFormValue({...formValue, status: e.target.value})}
                   name='status'
                   type='text'
                   placeholder='Status'/>
            <input value={species}
                   onChange={(e) => setFormValue({...formValue, species: e.target.value})}
                   name='species'
                   type='text'
                   placeholder='Species'/>
            <input value={type}
                   onChange={(e) => setFormValue({...formValue, type: e.target.value})}
                   name='type'
                   type='text'
                   placeholder='Type'/>
            <input value={gender}
                   onChange={(e) => setFormValue({...formValue, gender: e.target.value})}
                   name='gender'
                   type='text'
                   placeholder='Gender'/>
            <button onClick={handleSearch}>Search</button>
        </form>
    );
};

export default SearchBar;
