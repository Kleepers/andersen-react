import React from 'react';
import {FormState} from "./SearchBarContainer";
import Suggestion from "../Suggestion/Suggestion";
import s from "./SearchBar.module.css";


type Props = {
    formValue: FormState,
    setFormValue: (formValue: FormState) => void,
    handleSearch: (e: React.FormEvent) => void,
    suggestions: any
}

const SearchBar = ({formValue, setFormValue, handleSearch, suggestions}: Props) => {
    const { name, status, species, type, gender } = formValue;

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
                {suggestions.map((item: any) => {
                    return <Suggestion key={item.id} data={item}/>;
                })}
            </div>
        </div>
    );
};

export default SearchBar;