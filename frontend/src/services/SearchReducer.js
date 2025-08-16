import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    searchItem: ''
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchVideo:(state, action)=>{
            state.searchItem = action
        }
    }
})

export const searchReducers = searchSlice.actions;

export default searchSlice.reducer;