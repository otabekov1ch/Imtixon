import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../main/postSlice";

export const addNewPost = createAsyncThunk(
    'posts/addpost',
    async function ({title, body, category}, { rejectWithValue }) {
        try {
            const res = await fetch(URL + "/posts", {
                method: "POST",
                headers: {
                'Accept': 'application / json',
                'Content-type': 'application/json', 
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo"
                },
                body: JSON.stringify({
                    categoryName: category,
                    title: title,
                    imageUrl: "https://source.unsplash.com/352x300",
                    body: body
                })

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

const newpostSlice = createSlice({
    name: "newpost",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },


    extraReducers: {
        [addNewPost.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.posts = action.payload;
        }
    }
})


export default newpostSlice.reducer;
