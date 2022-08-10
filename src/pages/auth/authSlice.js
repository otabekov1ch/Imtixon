import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "https://n36-blog.herokuapp.com"

export const fetchToken = createAsyncThunk(
    'auth/fetchToken',
    async function({login, password}, {rejectWithValue}) {
        try {
            const res = await fetch(API + `/login?login=${login}&password=${password}`);
            if(!res.ok) {
                throw new Error("Server Error!")
            }
            const data = await res.json()
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const authSlice = createSlice({
    name: "token",
    initialState: {
        token: [],
        status: "idle",
        error: null,
    },
    extraReducers: {
        [fetchToken.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchToken.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.token = action.payload; 
        },
        [fetchToken.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})


export default authSlice.reducer;