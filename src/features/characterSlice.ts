import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Filters} from "../components/Cards/CardsInterfaces";

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
export const selectFavorites = (state: RootState): Array<number> => state.character.favorites;
export const characterActions = characterSlice.actions;

export const {setHistory, setFavorites, deleteFavorite, clearHistory, initCharacters} = characterSlice.actions;

export default characterSlice.reducer;
