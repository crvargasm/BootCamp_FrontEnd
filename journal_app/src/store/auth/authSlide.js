import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoUrl = payload.photoUrl;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            
        },
        checkingCredentials: (state) => {
            state.status = "checking";
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;