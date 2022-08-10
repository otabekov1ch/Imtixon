import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../main/postSlice";

export const searching = createAsyncThunk("search/getSearch", ({title}) => {
    return fetch(`https://n36-blog.herokuapp.com/posts/search?searchValue=${title}`)
    .then(res => res.json())
})

const searchSlice = createSlice({
    name: "search",
    initialState: {
        items: [],
        loading: false,
    },
    extraReducers: {
        [searching.pending]: (state) => {
            state.loading = true
        },
        [searching.fulfilled]: (state, action) => {
            state.items = action.payload
            state.loading = false
        },
        [searching.rejected]: (state, action) => {
            state.loading = false
            state.items = action.payload
        }
    }
})


export default searchSlice.reducer