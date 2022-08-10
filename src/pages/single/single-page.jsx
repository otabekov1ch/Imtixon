import React, { useEffect, useState } from 'react';
import './single-page.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import SiglePageComp from '../../components/single/singlepage.component';

const SinglePage = () => {
  const postParam = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://n36-blog.herokuapp.com/posts/${postParam.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(postParam.id);
  console.log(data);
  return (
    <>
      <Link className='linke' to='/' >Go Home</Link>
      <div className='wrapper-page'>


        {data ? (
          <SiglePageComp
            id={data.id}
            data={data.created_at}
            category={data.category_name}
            img={data.main_image_url}
            title={data.title}
            body={data.body}
          />
        ) : (
          <strong>Loading...</strong>
        )}

      </div>
    </>
  );
};

export default SinglePage;