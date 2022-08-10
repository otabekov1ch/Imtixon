import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EditPostComp() {
    const param = useParams()
    console.log(param);

    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [text, setText] = useState([])
    function titlechange(e){
        e.preventDefault()
        setTitle(e.target.value)
    }
    function textchange(e){
        e.preventDefault()
        setText(e.target.value)
    }
    function categorychange(e){
        e.preventDefault()
        setCategory(e.target.value)
    }

    async function editPost (e) {
        e.preventDefault()
        let res = await fetch(`https://n36-blog.herokuapp.com/posts/${param.id}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
            },
            body: JSON.stringify({
                categoryName: category,
                title:  title,
                imageUrl: "https://source.unsplash.com/352x300",
                body: text
            })
        })
        res = await res.json()

        console.log(res);
        window.location.reload(false)
    }


    return (
        <div>
            <div className='wrapper'>
            <form method='post' onSubmit={editPost}  >
                <h3 className='heading'>Edit Post</h3>
                <label  htmlFor="title">Post Title</label>
                <input required onChange={titlechange}  type="text" name="title" id="title" />
                <label htmlFor="body" >Post Body</label>
                <input required onChange={textchange}  type="text" name="body" id="body" />
                <label htmlFor="Category">Category</label>
                <input required onChange={categorychange} type="text" name="category" id="category" />
                <button type="submit" >Submit</button>
            </form>
            <Link to='/' >Go Home</Link>
        </div>
        </div>
    )
}

export default EditPostComp
