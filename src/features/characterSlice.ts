import {createSlice, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Character, Filters} from "../components/Cards/CardsInterfaces";

let history;
let email;
let favorites;

try {
    email = JSON.parse(localStorage.getItem('user') || '').email;
} catch {
    email = '';
}

try {
    history = JSON.parse(localStorage.getItem(`${email}history`) || '');
} catch {
    history = [];
}

try {
    favorites = JSON.parse(localStorage.getItem(`${email}favorites`) || '');
} catch {
    favorites = [];
}

interface CharacterState {
    characters: Array<Character> | [];
    history: Array<Filters> | [];
    favorites: Array<number> | [];
}

const initialState: CharacterState = {
    characters: [],
    history: history,
    favorites: favorites
}

export const characterMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === 'character/setHistory') {
        let newHistory = [...store.getState().character.history, action.payload];
        localStorage.setItem(`${store.getState().auth.email}history`, JSON.stringify(newHistory));
    }
    if (action.type === 'character/setFavorites') {
        let newFavorites = [...store.getState().character.favorites, action.payload];
        localStorage.setItem(`${store.getState().auth.email}favorites`, JSON.stringify(newFavorites));
    }
    if (action.type === 'character/deleteFavorite') {
        let newFavorites = store.getState().character.favorites.filter((item : number) => item !== action.payload);
        localStorage.setItem(`${store.getState().auth.email}favorites`, JSON.stringify(newFavorites));
    }
    if (action.type === 'character/clearHistory') {
        localStorage.removeItem(`${store.getState().auth.email}history`);
    }
    next(action);
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setHistory: (state, action: PayloadAction<Filters>) => {
            state.history = [...state.history, action.payload]
        },
        setFavorites: (state, action: PayloadAction<number>) => {
            state.favorites = [...state.favorites, action.payload]
        },
        deleteFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((item) => item !== action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
        }
    }
})

export const selectHistory = (state: RootState) => state.character.history;
export const selectFavorites = (state: RootState) => state.character.favorites;

export const {setHistory, setFavorites, deleteFavorite, clearHistory} = characterSlice.actions;

export default characterSlice.reducer;
