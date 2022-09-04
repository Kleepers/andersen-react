import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {signUpApi} from "../components/SignUp/signUpApi";
import {signInApi} from "../components/SignIn/SignInApi";

const initialState = {
    token: localStorage.getItem('token') || '',
    loading: false,
    error: null,
}

export const signUpUser = createAsyncThunk(
    'auth/signUpUser',
    async (data) => {
        return await signUpApi(data);
    }
)

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (data) => {
        return await signInApi(data);
    }
)

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },

    extraReducers: {
        [signUpUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        [signUpUser.pending]: (state,action) => {
            state.loading = true;
        },
        [signUpUser.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [signInUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        [signInUser.pending]: (state,action) => {
            state.loading = true;
        },
        [signInUser.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
})

export default authReducer.reducer
