import {configureStore} from "@reduxjs/toolkit"
import todoAPI from "./service/todoService"

const Store = configureStore({
    reducer:{
            [todoAPI.reducerPath]:todoAPI.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware)
})

export default Store;