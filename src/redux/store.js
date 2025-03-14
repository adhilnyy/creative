import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import postReducer from './postSlice'

const store = configureStore({
    reducer: {
        user : authReducer,
        currentPost : postReducer
    }
})

export default store