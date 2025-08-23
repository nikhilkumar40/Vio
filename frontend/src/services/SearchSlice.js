import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    searchItems: [{
        id: 1,
        title: 'FightClub',
        genre: 'motivation'
    },]
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchVideo: (state, action) => {
            state.searchItems = state.searchItems
                .filter(
                    item => item.title.toLowerCase()
                        .includes(action.payload.toLowerCase())
                )
        },

        saveVideos: (state, action) => {
            state.searchItems.push(action)
        }
    }
})

export const { searchVideo } = searchSlice.actions;

export default searchSlice.reducer;