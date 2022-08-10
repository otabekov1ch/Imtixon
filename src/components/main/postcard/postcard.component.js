import React from 'react'
import Time from '../../../assets/img/time.png'
import {Link, useParams} from 'react-router-dom';
import './postcard.scss'

function PostCard(post) {
    const param = useParams();
    async function DeletePost () {
    let res = await fetch(
      `https://n36-blog.herokuapp.com/posts/${param.post}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
        },
      }
    );
    res = await res.json()
    console.log(res);
  }

    return (
        <li className='list__item'>
            <div className="item-wrapper">
                <div className="date-category">
                    <p className="date">
                    {post.time}
                    </p>
                    <p className="category">
                    {post.category}
                    </p>
                </div>
                <Link style={{ textDecoration: 'none' }} to={`/posts/${post.id}`}> <p className='card__title'>{post.title}</p></Link>
                <div className="card__footer">
                <div className='times'><img src={Time} alt="jhgjh" /><p className='minut'>3 minutes read</p></div>
                <Link className='linke' to={`edit/${post.id}`}>Edit</Link>
                <button onClick={{DeletePost}}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default PostCard
