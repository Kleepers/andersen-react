import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {setHistory} from "../../features/characterSlice";
import {useAppDispatch} from "../../app/hooks";
import useDebounce from "../../hooks/useDebounce";
import Suggestion from "../Suggestion/Suggestion";
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

interface Suggestion {
    id: string;
    name: string;
    image: string;
    gender: string;
    status: string;
}

const SearchBar = ({filterHandler}: Props) => {

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
    const [suggestions, setSuggestions] = useState([]);
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
        <div className={s.searchBar__wrapper}>
        <form className={s.searchBar}>
            <input value={name}
                   onChange={(e) => setFormValue({...formValue, name: e.target.value})}
                   name='name'
                   type='text'
                   placeholder='Name'
                   className={s.searchBar__input}
            />
            <input value={status}
                   onChange={(e) => setFormValue({...formValue, status: e.target.value})}
                   name='status'
                   type='text'
                   placeholder='Status'
                   className={s.searchBar__input}
                   list="status-select"
            />
            <datalist id="status-select">
                <option value="alive"/>
                <option value="dead"/>
                <option value="unknown"/>
            </datalist>
            <input value={species}
                   onChange={(e) => setFormValue({...formValue, species: e.target.value})}
                   name='species'
                   type='text'
                   placeholder='Species'
                   className={s.searchBar__input}
            />
            <input value={type}
                   onChange={(e) => setFormValue({...formValue, type: e.target.value})}
                   name='type'
                   type='text'
                   placeholder='Type'
                   className={s.searchBar__input}
            />
            <input value={gender}
                   onChange={(e) => setFormValue({...formValue, gender: e.target.value})}
                   name='gender'
                   type='text'
                   placeholder='Gender'
                   className={s.searchBar__input}
                   list="gender-select"
            />
            <datalist id="gender-select">
                <option value="male"/>
                <option value="female"/>
                <option value="genderless"/>
                <option value="unknown"/>
            </datalist>
            <button className={s.searchBar__button} onClick={handleSearch}>Search</button>
        </form>
            <div className={s.suggestions__wrapper}>
                {suggestions.map((item: Suggestion) => {
                    console.log(item);
                    const {name, id, image, gender, status} = item;
                    return <Suggestion id={id} name={name} image={image} gender={gender} status={status}/>;
                })}
            </div>
        </div>
    );
};

export default SearchBar;
