import {Middleware} from "@reduxjs/toolkit";
import {setUser} from "../features/authSlice";
import {initCharacters} from "../features/characterSlice";

export const initMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === "init/initApp") {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '');
            if (user.email) {
                store.dispatch(setUser(user))
                let favorites = [];
                let history = [];
                if (localStorage.getItem(`${user.email}favorites`)) {
                    favorites = JSON.parse(localStorage.getItem(`${user.email}favorites`) || '');
                }
                if (localStorage.getItem(`${user.email}history`)) {
                    history = JSON.parse(localStorage.getItem(`${user.email}history`) || '');
                }
                store.dispatch(initCharacters({favorites, history}))
            }
        } catch {
            console.log('error with getting data from LC')
        }
    }
    next(action);
}
