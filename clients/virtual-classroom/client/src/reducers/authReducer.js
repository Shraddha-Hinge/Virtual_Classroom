import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStarted: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSucceeded: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.loading = false;
        },
        loginFailed: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = action.payload.error;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export