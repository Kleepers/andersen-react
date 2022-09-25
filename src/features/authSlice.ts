import {createSlice, Middleware, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {initCharacters} from "./characterSlice";

export interface AuthState {
    name: string | null;
    token: string | null;
    isAuth: true | false;
    email: string | null;
}

const initialState: AuthState = {
    name: null,
    token: null,
    isAuth: false,
    email: null,
}

export const authMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === authSlice.actions.setUser.type) {
        localStorage.setItem('user', JSON.stringify(action.payload));
        try {
            let favorites;
            let history;
            if (localStorage.getItem(`${action.payload.email}favorites`)) {
                favorites = JSON.parse(localStorage.getItem(`${action.payload.email}favorites`) || '');
            }
            if (localStorage.getItem(`${action.payload.email}history`)) {
                history = JSON.parse(localStorage.getItem(`${action.payload.email}history`) || '');
            }
            store.dispatch(initCharacters({favorites, history}))
        }
        catch {
            console.log('error with getting data from LC')
        }
    }
    if (action.type === authSlice.actions.logout.type) {
        localStorage.removeItem('user');
        store.dispatch(initCharacters({favorites: [], history: []}));
    }
    next(action);
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{name: string, token: string, email: string}>) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
            state.isAuth = true;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.name = null;
            state.token = null;
            state.isAuth = false;
            state.email = null;
        },
    }
})

export const selectAuth = (state: RootState) => state.auth;

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;
