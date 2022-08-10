import LoginPage from "./pages/auth/auth-form";
import './app.scss'
import React, { useEffect } from "react"
import FooterComponent from "./components/footer/footer.component";
import HomePage from "./pages/home/home-page";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./components/main/postSlice";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/single/single-page";
import CategoryPage from "./pages/category/categorypage";
import NewPost from "./pages/newpost/newPost";
import EditPost from "./pages/editpost/editpost";

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  
  if(!token ){
    return <LoginPage/>
  } else

  return (
    <>
    <div className="App">
      <div className="app_container">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<SinglePage/>} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/newPost" element={<NewPost/>} />
          <Route path="/edit/:id" element={<EditPost/>} />
        </Routes>
        
      </div>
      
    </div>
    

    </>
  );
}

export default App;
