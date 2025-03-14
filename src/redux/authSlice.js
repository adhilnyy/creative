import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.username = action.payload
        },
        logout : (state) => {
            state.username = null
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer