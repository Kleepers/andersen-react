import React, {useEffect, useState} from 'react';

const SearchBar = (props: any) => {

    const [formValue, setFormValue] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
    });

    const { name, status, species, type, gender } = formValue;

    useEffect(() => {
        props.filterHandler(formValue);
    }, [formValue]);

    return (
        <div>
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
        </div>
    );
};

export default SearchBar;
