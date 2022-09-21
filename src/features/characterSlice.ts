import {createSlice, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Character, Filters} from "../components/Cards/CardsInterfaces";

interface CharacterState {
    history: Array<Filters> | [];
    favorites: Array<number> | [];
}

type InitCharactersPayload = {
    favorites: Array<number> | [];
    history: Array<Filters> | [];
}
const initialState: CharacterState = {
    history: [],
    favorites: []
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
        },
        initCharacters: (state, action: PayloadAction<InitCharactersPayload>) => {
            state.favorites = action.payload.favorites;
            state.history = action.payload.history;
        }
    }
})

export const selectHistory = (state: RootState) => state.character.history;
export const selectFavorites = (state: RootState) => state.character.favorites;

export const {setHistory, setFavorites, deleteFavorite, clearHistory, initCharacters} = characterSlice.actions;

export default characterSlice.reducer;
