import {createSlice, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Character} from "../components/Cards/CardsInterfaces";

let history;
let email;

try {
    email = JSON.parse(localStorage.getItem('user') || '').email;
} catch {
    email = '';
}

try {
    history = JSON.parse(localStorage.getItem(`${email}`) || '');
} catch {
    history = [];
}

interface CharacterState {
    characters: Array<Character> | [];
    history: any;
    favorites: any
}

const initialState: CharacterState = {
    characters: [],
    history: history,
    favorites: []
}

export const characterMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === 'character/setHistory') {
        let newHistory = [...store.getState().character.history, action.payload];
        localStorage.setItem(`${store.getState().auth.email}`, JSON.stringify(newHistory));
    }
    next(action);
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setHistory: (state, action: any) => {
            state.history = [...state.history, action.payload]
        },
        setFavorites: (state, action: any) => {
            state.favorites = [...state.favorites, action.payload]
        }
    }
})

export const selectHistory = (state: RootState) => state.character.history;
export const selectFavorites = (state: RootState) => state.character.favorites;

export const {setHistory, setFavorites} = characterSlice.actions;

export default characterSlice.reducer;
