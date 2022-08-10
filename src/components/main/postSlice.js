import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const URL = "https://n36-blog.herokuapp.com"

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (_, { rejectWithValue }) {
        try {
            const res = await fetch(URL + "/posts/bycategory?page=0", {
                headers: {
                    categoryname: "All"
                }
            });
            if (!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const deletePosts = createAsyncThunk(
    'posts/deletePosts',
    async function ({ id }, { rejectWithValue }) {
        try {
            const res = await fetch(URL + `/posts/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
                },
            });
            if (!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },


    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = [action.payload];
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = "false";
            state.error = action.payload;
        }
    }
})


export default postSlice.reducer;