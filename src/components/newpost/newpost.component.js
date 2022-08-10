import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './newpostComp.scss'
import { useDispatch } from 'react-redux/es/exports';
import { addNewPost } from './newpostSlice';

function NewPostComp() {
    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [body, setBody] = useState([])

    const posttitle = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    const postbody = (e) => {
        e.preventDefault()
        setBody(e.target.value)
    }
    const postcategory = (e) => {
        e.preventDefault()
        setCategory(e.target.value)
    }
    async function AddNewPost (event) {
        event.preventDefault()
        let res = await fetch("https://n36-blog.herokuapp.com/posts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
            },
            body: JSON.stringify({
                categoryName: category,
                title: title,
                imageUrl: "https://source.unsplash.com/352x300",
                body: body
            })
        })
        if(!res.ok){
            throw new Error("Whoops!")
        }
        res = await res.json()
        console.log(res);
        window.location.reload(false);
    }

    return (
        <div className='wrapper'>
            <form method='post' onSubmit={AddNewPost} >
                <h3 className='heading'>Add New Post</h3>
                <label  htmlFor="title">Post Title</label>
                <input required onChange={posttitle} type="text" name="title" id="title" />
                <label htmlFor="body" >Post Body</label>
                <input required onChange={postbody} type="text" name="body" id="body" />
                <label htmlFor="Category">Category</label>
                <input required onChange={postcategory} type="text" name="category" id="category" />
                <button type="submit" >Submit</button>
            </form>
            <Link to='/' >Go Home</Link>
        </div>
    )
}

export default NewPostComp
