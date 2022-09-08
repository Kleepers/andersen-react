import {createSlice, Middleware, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

let user;

try {
    user = JSON.parse(localStorage.getItem('user') || '');
} catch {
    user = {};
}


export interface AuthState {
    name: string | null;
    token: string | null;
}

const initialState: AuthState = {
    name: user.name || null,
    token: user.token || null,
}

export const authMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === 'auth/setUser') {
        localStorage.setItem('user', JSON.stringify(action.payload));
    }
    if (action.type === 'auth/logout') {
        localStorage.clear();
    }
    next(action);
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{name: string, token: string}>) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.name = null;
            state.token = null;
        },
    }
})

export const selectAuth = (state: RootState) => state.auth;

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;
