import React, { useEffect, useState } from 'react'
import PostCard from './postcard/postcard.component'
import './postlist.scss'
import { useParams } from 'react-router-dom'

function Postlist() {
    let param = useParams()

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      let res = await fetch(
        "https://n36-blog.herokuapp.com/posts/bycategory?page=0",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            categoryname: param.category ? param.category : "All",
          },
        }
      );
      let data = await res.json();
      setData(data.posts);
    })();
  }, [param]);

    
    return (
        <div className='posts-list'>
            
            <ul className='list'>
                {
                   data ? data.map(post => <PostCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category_name}
                    time={post.created_time} />) : <strong>Loading...</strong>
                }
            </ul>
        </div>
    )
}

export default Postlist
