import { configureStore } from '@reduxjs/toolkit';
import {authApi} from '../services/authApi';
import authReducer, {authMiddleware} from '../features/authSlice';
import characterReducer, {characterMiddleware} from '../features/characterSlice'
import {characterApi} from "../services/characterApi";
import {initMiddleware} from "../middleware/initMiddleware";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        character: characterReducer,
        [authApi.reducerPath]: authApi.reducer,
        [characterApi.reducerPath]: characterApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(authMiddleware)
        .concat(characterApi.middleware)
        .concat(characterMiddleware)
        .concat(initMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
