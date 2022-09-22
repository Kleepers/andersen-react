import {Middleware} from "@reduxjs/toolkit";
import {characterActions} from "../features/characterSlice";

export const characterMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === characterActions.setHistory.type) {
        let newHistory = [...store.getState().character.history, action.payload];
        localStorage.setItem(`${store.getState().auth.email}history`, JSON.stringify(newHistory));
    }
    if (action.type === characterActions.setFavorites.type) {
        let newFavorites = [...store.getState().character.favorites, action.payload];
        localStorage.setItem(`${store.getState().auth.email}favorites`, JSON.stringify(newFavorites));
    }
    if (action.type === characterActions.deleteFavorite.type) {
        let newFavorites = store.getState().character.favorites.filter((item : number) => item !== action.payload);
        localStorage.setItem(`${store.getState().auth.email}favorites`, JSON.stringify(newFavorites));
    }
    if (action.type === characterActions.clearHistory.type) {
        localStorage.removeItem(`${store.getState().auth.email}history`);
    }
    next(action);
}
