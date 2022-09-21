import {createSlice, Middleware, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

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
    email: null
}

export const authMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === 'auth/setUser') {
        localStorage.setItem('user', JSON.stringify(action.payload));
    }
    if (action.type === 'auth/logout') {
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
        },
    }
})

export const selectAuth = (state: RootState) => state.auth;

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;
