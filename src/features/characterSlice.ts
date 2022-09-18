import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Character} from "../components/Cards/CardsInterfaces";


interface CharacterState {
    characters: Array<Character> | [];
}

const initialState: CharacterState = {
    characters: []
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<Array<Character>>) => {
            state.characters = action.payload
        }
    }
})

export const selectCharacters = (state: RootState) => state.character;

export const {setCharacters} = characterSlice.actions;

export default characterSlice.reducer;