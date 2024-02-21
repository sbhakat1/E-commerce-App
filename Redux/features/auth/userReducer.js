import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
    builder.addCase("loginRequest", (state,action) => {
        state.loading = true
    })
    builder.addCase('loginSuccess', (state,action) => {
        state.loading= false
        state.message = action.payload
        state.isAuthentication = true
    })
    builder.addCase("loginFail", (state,action) => {
        state.isAuthentication = false
        state.error = action.playload;
    })
    builder.addCase("clearError", (state) => {
        state.error = null
    })
    builder.addCase("clearMessage", (state) => {
        state.message = null
    })
})