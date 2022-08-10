import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const pagenition = createAsyncThunk("pages/page", ({ page }) => {
    return fetch(`https://n36-blog.herokuapp.com/posts/bycategory?page=${page}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          categoryname: "All",
        },
    })
    .then(res => res.json())
})


const paginationSlice = createSlice({
    name: "pages",
    initialState: {
        pages: [],
        loading: false,
    },
    extraReducers: {
        [pagenition.pending]: (state) => {
            state.loading = true
        },
        [pagenition.fulfilled]: (state, action) => {
            state.pages = action.payload
            state.loading = false
        },
        [pagenition.rejected]: (state, action) => {
            state.loading = false
            state.pages = action.payload
        }
    }
})


export default paginationSlice.reducer