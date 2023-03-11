import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter_slice'



const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export type AppState = ReturnType<typeof store.getState>

export default store
