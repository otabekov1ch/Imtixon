import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/notfound/notfound";
import PostCard from "../main/postcard/postcard.component";

function CategoryRender() {

  let param = useParams()
  const [categoryItem, setItem] = useState([]);

  useEffect(() => {
    (async function () {
      let res = await fetch(
        "https://n36-blog.herokuapp.com/posts/bycategory?page=0",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            categoryname: !param.category ? "All" : param.category,
          },
        }
      );
      let data = await res.json();
      setItem(data.posts);
    })();
  }, [param]);
  

  return (
    <>
      {categoryItem ?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category_name}
          time={post.created_time}
        />
      ))}
    </>
  );
}

export default CategoryRender;
