import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../../services/SearchReducer'

const store = configureStore({
    reducer: {
        search : searchReducer
    }
})

export default store;