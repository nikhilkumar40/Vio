import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"



const initialState = {
    searchItems: [{
        id: 1,
        title: '',
        genre: ''
    }]
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchVideo: (state, action) => {
            return state.searchItems
                .map
                (item => item.title
                    .toLowerCase()
                    .search(action.title.toLowerCase()) > 0
                    ? item
                    : null
                )
        },

        saveVideos: (state, action) => {
            state.searchItems.push(action)
        }
    }
})

export const { searchVideo } = searchSlice.actions;

export default searchSlice.reducer;