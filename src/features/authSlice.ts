import {createSlice, Middleware, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {Filters} from "../components/Cards/CardsInterfaces";

export interface AuthState {
    name: string | null;
    token: string | null;
    isAuth: true | false;
    email: string | null;
    favorites: Array<number> | null;
    history: Array<Filters> | null;
}

const initialState: AuthState = {
    name: null,
    token: null,
    isAuth: false,
    email: null,
    favorites: null,
    history: null,
}

export const authMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === authSlice.actions.setUser.type) {
        localStorage.setItem('user', JSON.stringify(action.payload));
    }
    if (action.type === authSlice.actions.logout.type) {
        localStorage.removeItem('user');
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
            state.favorites = null;
            state.history = null;
        },
    }
})

export const selectAuth = (state: RootState) => state.auth;

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;
