import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../../services/SearchSlice'

const store = configureStore({
    reducer: {
        search : searchReducer
    }
})

export default store;