import { configureStore } from "@reduxjs/toolkit"; 
import postReducer from "../components/main/postSlice";
import authReducer from "../pages/auth/authSlice"
import searching from '../components/header/searchingSlice'
import addpostReducer from "../components/newpost/newpostSlice";
import paginationSlice from "../components/pagination/paginationSlice";
export default configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer,
        search: searching,
        addpost: addpostReducer,
        pages: paginationSlice,
    }
}) 