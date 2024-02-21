import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './features/auth/userReducer'

export default store = configureStore({
    reducer: {
        user: userReducer,
    },
})

//HOST
export const server = 'http://192.168.1.6:8080/api/v1'